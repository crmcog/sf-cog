---
title: Apex II
lang: en-US
permalink: /pd1-guide/apex-2
metaTitle: More examples, patterns and advanced Apex
meta:
  - name: description
    content: Go deeper in Apex!
  - name: keywords
    content: apex, salesforce-programming, salesforce-scripting
---

# Apex - Part II

We will dig further into how Apex can be used effectively.

## Order of Execution

Quite recently we saw how Apex works its magic and performs validations and data manipulation. We had seen a while back how point & click tools like validation rules, workflow, process builder do their part in validation/automation.

I am sure a keen mind would bring forth a burning question -

> What runs when?

And.. here's the answer - when record is saved, following happens in order.

![salesforce-order-of-execution](./img/salesforce-order-of-execution.jpg)

Note that during a recursive save, Salesforce skips steps from (assignment rules) through (roll-up summary field in the grandparent record).

Other considerations -

- Order of execution of triggers in case of multiple triggers not guaranteed (therefore don’t use multiple triggers)
- In Triggers: `trigger.old` contains older values with an exception. If an update triggers workflow update, `trigger.old` contains values prior to update started and not values just before workflow update
- For DMLs that allow partial updates, there may be more than one attempt made to update records (in case first was failure)

Further read -

- Documentation reference for [order of execution](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm?search_text=order%20of%20execution)

## Apex Patterns

Design patterns and frameworks extend the core language capabilities to make it more –

- Easier to develop (questionable for some, but true)
- Easier to maintain – scale better, minimize changes, easier refactoring

Why use a pattern? A pattern provides a standard set of best practices that you will love adhering to -

- Separation of duties
- manage governed resources (limits) better
- Standardize structure, coding and enforce best practices

There are quite a few patterns in Salesforce Apex. They have their advantages, and we strongly recommend choosing a framework that you can wrap your head around, and start that on day one.

Let us see some marquee advantages of using a pattern in Salesforce Apex -

- Separation of Concerns
  - As classes become bigger, code will become more difficult to manage.
  - Mangling everything that Apex will do in one place will make it difficult to change the code in a 'safe' way
- Standardized practices
  - Classes/methods strewn over and stitched together as application gains complexity will make for harder to maintain code
  - Individual developers can bring their own practice and make it more difficult for others to understand
  - Documented standards are not always implemented (despite static code analysis)
  - Newer developers will tend to take longer time to get onboarded and become productive
- Manage resources better
  - It is advisable to collate resource-sensitive operations like DML together. Non-standard code structures and interim updates to achieve specific use cases can happen
  - Difficult to centralize such operations etc. using convention alone

In triggers specifically patterns -

- Standardize control over order of execution: Triggers don't guarantee order of execution, but that has to be mandated even if it does not be relevant immediately
- Control over re-entrant code (e.g. recursion): Recursion due to triggers getting executed multiple times (e.g. trigger code updating field that will re-trigger trigger) will cause unneeded updates / resource consumption

There is no one officially recommended Apex design pattern - that largely depends on your use case and how much code you are putting in. Following are a few patterns that are well known-

- [FFLIB common patterns](https://github.com/financialforcedev/fflib-apex-common)
  - Most popular
  - Used by ISVs, large enterprises
  - Changes the way you code the application
  - Complex to setup. Needs some realignment from teams for good adoption
- [Nebula framework](https://github.com/jongpie/NebulaFramework)
  - Discussed in salesforce circles , but not actively maintained and used

Specifically for triggers -

- Trigger framework outlined in [Advanced Apex Programming in Salesforce](https://amzn.to/2OY10lW)

- [Simple interface-based trigger patterns](https://developer.secure.force.com/cookbook/recipe/trigger-pattern-for-tidy-streamlined-bulkified-triggers)

- [Lightweight Apex Trigger framework](http://chrisaldridge.com/triggers/lightweight-apex-trigger-framework/)

By the way, if you are serious about Apex, **Advanced Apex Programming in Salesforce** is the one book that we strongly recommend you read and re-read.

## Apex Trigger Patterns

The initial instinct when you saw triggers is to cram all possible code and get stuff done.

The code would look something like this -

```java
// example similar to that provided by salesforce.com
trigger myAccountTrigger on Account(before delete, before insert, before update,
    after delete, after insert, after update) {
    if (Trigger.isBefore) {
        if (Trigger.isDelete) {
            // In a before delete trigger, the trigger accesses the records that will be
            // deleted with the Trigger.old list.
            for (Account a: Trigger.old) {
                if (a.name != 'okToDelete') {
                    a.addError('You can\'t delete this record!');
                }
            }
        } else {
            // In before insert or before update triggers, the trigger accesses the new records
            // with the Trigger.new list.
            for (Account a: Trigger.new) {
                if (a.name == 'bad') {
                    a.name.addError('Bad name');
                    }
                }
                if (Trigger.isInsert) {
                    for (Account a: Trigger.new) {
                        System.assertEquals('xxx', a.accountNumber);
                        System.assertEquals('industry', a.industry);
                        System.assertEquals(100, a.numberofemployees);
                        System.assertEquals(100.0, a.annualrevenue);
                        a.accountNumber = 'yyy';
                    }
                }
            }
        }

    } else {
        // If the trigger is not a before trigger, it must be an after trigger.
        if (Trigger.isInsert) {
            List < Contact > contacts = new List <Contact> ();
            for (Account a: Trigger.new) {
                if (a.Name == 'makeContact') {
                    contacts.add(new Contact(LastName = a.Name,
                        AccountId = a.Id));
                }
                3
                insert contacts;
            }
        }
    }
}
```

Observations -

- All code including business logic, data operations and everything else in one place - trigger
- If you want to put more logic in, you have to change this trigger - which is now a more complex place than what you started with. It is difficult to change
- It is difficult to reuse function blocks within this code - there is no way to call these functions from other triggers/classes. It is difficult to scale this trigger

Instead of the "anything-goes" approach, we can use a more modular setup that encourages code reuse and is easier to change.

Below setup demonstrates one of the many modular/structured approaches we can take. We will rewrite the above code using a "pattern" -

1. We create an interface `ITrigger` that can be used across our salesforce instance. This will provide access to all possible trigger methods
1. We use a standard practice to initiate anything from a trigger - we call this a `TriggerFactory` and create it as a class. This factory will use our interface `ITrigger` and can be called from any trigger.
1. Next, we create a trigger handler class for individual objects. We call it `AccountHandler` and this is written to manage triggers for `Account` object. This will implement our `ITrigger` interface
1. Finally, we then write minimal code in the trigger itself - see `AccountTrigger` below. This will be the only trigger defined for the object

**ITrigger**

```java
public interface ITrigger {
    /**
     * bulkBefore
     *
     * This method is called prior to execution of a BEFORE trigger. Use this to cache
     * any data required into maps prior execution of the trigger.
     */

    void bulkBefore();

    /**
     * bulkAfter
     *
     * This method is called prior to execution of an AFTER trigger. Use this to cache
     * any data required into maps prior execution of the trigger.
     */

    void bulkAfter();

    /**
     * beforeInsert
     * This method is called iteratively for each record to be inserted during a BEFORE
     * trigger. Never execute any SOQL/SOSL etc in this and other iterative methods.
     */

    void beforeInsert(SObject so);

    /**
     * beforeUpdate
     *
     * This method is called iteratively for each record to be updated during a BEFORE
     * trigger.
     */

    void beforeUpdate(SObject oldSo, SObject so);

    /**
     * beforeDelete
     *
     */

    void beforeDelete(SObject so);

    // More code to implement everything incl. kitchensink
}
```

**TriggerFactory**

```java
{
    // example by salesforce
    /**
     * Class TriggerFactory
     * Used to instantiate and execute Trigger Handlers associated with sObjects.
     */
    public with sharing class Triggerfactory {
        /**
         * Public static method to create and execute a trigger handler
         * Arguments: Schema. sObjectType soType - Object type to process (SObject.sObjectType)
         * Throws a TriggerException if no handler has been coded.
         */
        public static void createHandler(Schema.sObjectType soType) {
            // Get a handler appropriate to the object being processed
            ITrigger handler = getHandler(soType);
            // Make sure we have a handler registered, new handlers must be registered in the getHandler method.
            if (handler == null) {
                throw new TriggerException('No Trigger Handler registered for Object Type: ' + soType);
            }
            // Execute the handler to fulfil the trigger
            execute(handler);
        }

        /**
         * private static method to control the execution of the handier
         * Arguments: ITrigger handler - A Trigger Handler to execute
         */
        private static void execute(ITrigger handler) {
            // Before Trigger
            if (Trigger.isBefore) {
                // Call the bulk before to handle any caching of data and enable bulkification
                handler.bulkBefore();
                // ..rest of code
            }
            // ..rest of operations/actions
        }
    }
```

**AccountHandler**

```java
public with sharing class AccountHandler
implements ITrigger {
    // Member variable to hold the Id's of Accounts ‘in use'
    private Set < Id > m_inUseIds = new Set < Id > ();
    // Member variable to record Audit records
    private List < Audit_c > m_audits = new List < Audit__c > ();
    // Constructor

    public AccountHandler() {}


    /**
    * bulkBefore
    =
    * This method is called prior to execution of a BEFORE trigger. Use this to cache
    * any data required into maps prior execution of the trigger.
    */
    public void bulkBefore() {
        // If this a delete trigger Cache a list of Account Id‘s that are ‘in use’
        if (Trigger.isDelete) {
            // pre load all the in use projects passed to this trigger
            m_inUselds = AccountGateway.findAccountIdsInUse(Trigger.oldMap.keySet());
        }
    }
    public void bulkAfter() {

    }

    public void beforeInsert(SObject so) {

    }
}
```

**AccountTrigger**

```java
trigger AccountTrigger on Account (after delete, after insert, after update){
    TriggerFactory.createHandler(Account, sObjectType)
}
```

### Advantages of using a trigger pattern

- Code reuse - you can have distinct classes for specific tasks and reuse them from the trigger handler class
- "One trigger" approach provides a tight control over what goes in a trigger and the ability to control the flow. Salesforce does not guarantee order of execution of triggers in a multi-trigger scenario - so, the associated class solves a big problem for us
- Minimal code in trigger - all business logic in an associated class
- You can cause recursion in any trigger by updating the same record. Although Salesforce has recursion limits, this can cause undesirable behaviour. You can use custom logic (simple if conditions would do) to prevent recursion
- Easier scalability

## Trigger Best Practices

- Always write your trigger code to handle bulk data. This is applicable for -
  - Data import
  - Mass actions from UI or through API
- You do these "bulkified operations" by adding records to collections & perform DMLs on those collections (instead of individual records)
- Follow a "one object - one trigger" policy. Don't write multiple triggers on same object. This will make your life easier.
- Select an Apex pattern & standardize trigger structure

## Class Best Practices

- Almost always (prefer to) use "with sharing" keyword. This will implement sharing rules and prevent accidental operations beyond users' data access rules
- Avoid declaring (all) variables in class! Take them variables to methods
- Evaluate patterns that can make your classes better maintainable
- Code must always be bulkified - process one or more records in one go.
- Minimize database operations / DML. Always avoid DML within loops
- Check for limits before executing block of code in complex scenarios
- Always test classes and functionality using large data sets
- Do not hard code in your code. Pick up values from preferences, records or any other place that is easier to control/change

## Standardized Test Data Management

We saw quite a bit of test classes and how test data can be used in the previous chapter.

Test data is generated in the test setup class, but can utilize a common Apex to generate data
Typical implementations use –

- Specific classes to generate data
- Use data files
- Reuse pre-existing data (not recommended)

```java
@isTest
public class TestDataFactory {
    public static void createTestRecords(Integer numAccts, Integer numContactsPerAcct) {
        List<Account> accts = new List<Account>();

        for(Integer i=0;i<numAccts;i++) {
            Account a = new Account(Name='TestAccount' + i);
            accts.add(a);
        }
        insert accts;

        List<Contact> cons = new List<Contact>();
        for (Integer j=0;j<numAccts;j++) {
            Account acct = accts[j];
            // For each account just inserted, add contacts
            for (Integer k=numContactsPerAcct*j;k<numContactsPerAcct*(j+1);k++) {
                cons.add(new Contact(firstname='Test'+k,
                                     lastname='Test'+k,
                                     AccountId=acct.Id));
            }
        }
        // Insert all contacts for all accounts
        insert cons;
    }
}
```

As your implementation grows, you will quickly realise the need to better standardize test data

- one standard for generating test data and using it
- make it easy to generate data variation
- avoid elaborate test data code in each class

A few practices to help -

- Generate test data files from pre-existing data (most preferred to control data variation)
  - Use all relationships & customizations existing in org
  - Export data, modify user keys to avoid unique constraint errors
  - Maintain data files through releases
- Use mocking functionality provided by frameworks like FFLIB
- Use [TDF](https://github.com/benahm/TDF)
  - Auto generate test data (not all fields) for objects
  - Get the right data distribution
  - Execute tests against large volumes of data

## Workshop

Here are the activities for the next two days (or weeks!? :))

| No. | Type    | Description            | Time (hrs) |
| --- | ------- | ---------------------- | ---------- |
| 1   | Do      | Validation             | 3          |
| 2   | Do      | Automation             | 7          |
| 3   | Do      | Batch                  | 6          |
| 4   | Present | Discuss completed work | 1          |

### Validation

- Do not allow partner to request for new inventory if current stock is 200% of planned inventory
- Enable managers to apply adhoc discounts to sales and service orders. Capture discounts and discount reasons against sales and service orders – calculate discount percentage against a given code. Validate discount codes provided against a master list that is applicable for the customer.
- Do not accept free service if the last two consecutive services have been ‘missed’

### Automation

- Maintain partner inventory
  - Add inventory to partner when inventory request is fulfilled
  - Remove inventory upon sale or transfer to manufacturer/other partner
- Maintain partner bonus
  - If opportunity is won through partner, add +10 to Partner Bonus
  - For a positive feedback from client, add 1 to Partner Bonus
- Upon sales opportunity closure, send reminder to customers
  - Won: thank them for the sale. Remind to send feedback
  - Lost: thank them for the opportunity. Remind them to send feedback or just respond to current email on why they did not buy the vehicle
- Create a service schedule based on miles, vehicle model and sale date – get master data from hard-coded schedule in Apex, a static file or a maintenance schedule master table for vehicle
- Sum up discounts for an order. Put discounts > 15% on hold until approved by regional sales manager and/or regional service manager
- Apply discounts provided at parent level in quote or order to child line items
- Flag lead as duplicate if lead is not associated with existing account, but has same name and location. Capture duplicate reason
- Put warranty status on vehicle on hold if five consecutive services are missed

### Batch

- Send birthday wishes to customers over email using a defined template
- If a customer does not have any vehicle associated for more than 3 months – update status to ‘Dormant’
- If lead with same name and location is associated with more than 4 campaigns, flag lead as duplicate in all of latest campaigns. Capture duplicate reason.
- Send service reminders to customers through emails when service is due in the next week
- Flag scheduled service as ‘missed’ if today > service scheduled date + 10 days
- If price changes in the price book for vehicle or parts, change price in all open opportunities and service records
- Monthly batch to reconcile loyalty points based on sale and service records. Log all inconsistencies
- Cancel leads with reason code when after two weeks past campaign end date but lead does not have any associated opportunity
- Send discount code of 5% on service for active VIP customers who did not have any contact in the last twelve months

## References & Further Study

### Read

- [Apex Design Patters](https://developer.salesforce.com/page/Apex_Design_Patterns)

### Watch

- [Apex Design Patterns](https://www.youtube.com/watch?v=tsa8Z2S1Agc)
- [Apex Enterprise Patterns](https://www.youtube.com/watch?v=qlq46AEAlLI)

### Do

- Complete on Trailhead --

  -[Service Layer](https://trailhead.salesforce.com/content/learn/modules/apex_patterns_sl?trail_id=force_com_dev_advanced)

  - [Domain and Selector Layer](https://trailhead.salesforce.com/content/learn/modules/apex_patterns_dsl)

- Go deeper (advanced)
  - [Play around with FFLIB framework](https://github.com/financialforcedev/fflib-apex-common)
  - [Advanced Apex Programming in Salesforce](https://amzn.to/2OY10lW)
  - [Force.com Enterprise Architecture](https://amzn.to/2PEedFr)

## Teaching Aids

### Presentation

#### 1. Apex: sf-cog

&nbsp;

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSh5OHMxrWgp12qFXpzm1qZ0PqvT_mpY0Uhu5BKoV7j5qZPWCOCxB8oFz2aSdhw4w/embed?start=false&loop=false&delayms=60000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-cog)
