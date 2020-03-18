---
title: Apex
lang: en-US
permalink: /pd1-guide/apex-1
metaTitle: Get started on Apex.
meta:
  - name: description
    content: Get to know basics of Apex, the scripting language for Salesforce.
  - name: keywords
    content: apex, salesforce-programming, salesforce-scripting
---

# Apex

## Workshop

Remember the golden rules of creating Apex code -

- Always create bulkified Apex
- All Apex classes MUST have 100% test coverage
- Mandated to use single trigger framework – can either utilize a simple call to class, use an interface, or use any of the trigger frameworks that you can lay your hands on
- Try to use / rewrite code using patterns & frameworks to learn more

Here are the activities for the day (or week!? :))

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

## Teaching Aids

### Presentation

#### 1. Apex: SF-Monkey

&nbsp;

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSh5OHMxrWgp12qFXpzm1qZ0PqvT_mpY0Uhu5BKoV7j5qZPWCOCxB8oFz2aSdhw4w/embed?start=false&loop=false&delayms=60000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-monkey)
