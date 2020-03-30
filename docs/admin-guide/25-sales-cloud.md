---
title: Sales Cloud
lang: en-US
permalink: /admin-guide/sales-cloud
# autoNext: 60-deep-dive-business-layer
metaTitle: Sales Cloud
meta:
  - name: description
    content: Support for sales functions using Salesforce.com Sales Cloud.
  - name: keywords
    content: sales-cloud
---

# Sales Cloud

## Workshop: Sales Cloud I

| No. | Type    | Description                   | Time (hrs) |
| --- | ------- | ----------------------------- | ---------- |
| 1   | Present | List all Sales Cloud entities | 0.5        |
| 2   | Do      | Create 2 email templates      | 0.5        |
| 3   | Do      | Convert 3 leads               | 0.5        |
| 4   | Do      | End to end customer flow      | 1          |
| 5   | Do      | Create custom record types    | 0          |
| 6   | Do      | Generate 2 reports            | 0.5        |

### List all Sales Cloud entities

Find out where you can find all Sales Cloud related entities in SFDC documentation / other sources. List all entities.

### Create 2 email templates

1. Create an email template “Lead New Customer Product Release” against Lead object

   ```
   Dear <firstname>
   Congrats on release of your newest product. It is amazing to see such quick but significant strides in <company>.

   I can see that your new product has all the inking of creating a revolution in <industry> industry.

   If you are willing, we can discuss how our <product interest> can help further your goals.

   Regards,
   <owner full name>
   ```

2. Use the email template to send an email to yourself against a lead record
3. Create an email template with below content

   ```
   Dear <contact first name>,
   We have recorded your query. We will respond within two business days from <Date Opened>.
   Please use reference number <case id> for any further communication.

   Regards,
   <case owner full name>
   <case owner phone> | <case owner email>

   ```

4. Go to Lead detail. Navigate to ‘Email’ tab. Select your template and send email to yourself

### Convert 3 Leads

1. Create a lead. Fill in all fields
2. Convert lead – create a new account, contact and opportunity
3. Create another lead. Fill in all fields
4. Convert lead – create a new opportunity, but use existing contact and account
5. Create yet another lead. Fill in all fields. Fill in different values for email and phone number
6. Convert lead – create new opportunity, but use existing contact and account. What happened to the information already there in the contact and the new information entered in the lead?

### End-to-end Customer Flow

1. Create campaign ‘5k Marathon’
2. Associate at least 5 existing contacts and 5 existing leads to the campaign
3. Import Leads and Contacts from file. Create a data file by exploring the template provided by Salesforce
4. Create at least 2 activities and 2 events against the campaign
5. Convert at least 3 leads by creating new opportunities, contacts and accounts
6. Convert at least 2 leads by merging into existing contacts and accounts
7. Update sales stages for opportunities. Create activities against newly created opportunity
8. Update sales stage to won for at least 2 opportunities and lost for 2 other opportunities
9. Create new contacts against the won accounts with distinct roles
10. Create a new email template that welcomes the new customers. Decide the content yourself, but merge content from the records
11. Email contacts welcoming them – email in one go
12. Create cases against the sold products to the customer – against account/contacts that have been newly created

### Create Custom Record Types

1. Create record type ‘Influencer’ under Contact. Change the layout for System Administrator from the default value

### Generate 2 Reports

1. Create one report each on Contact and Opportunity. Include your favourite fields (or accept defaults) and generate report

## Workshop: Sales Cloud II

| No. | Type | Description                   | Time (hrs) |
| --- | ---- | ----------------------------- | ---------- |
| 1   | Do   | Create products and pricebook | 0.5        |
| 2   | Do   | Currency setup                | 0.5        |
| 3   | Do   | Inline reports                | 0          |
| 4   | Do   | Create Quotes                 | 0.5        |
| 5   | Do   | Modify Sales Path             | 0.5        |

### Create products and pricebook

1. Create at least 2 products and 2 price books. Associate 1 product to 1 price book
2. Associate pricebook to opportunity. Do you see all products that can be associated with opportunity?
3. Change pricing of the product in the two pricebooks. What happens when you change the pricebook in the opportunity? Does the opportunity value change?

### Currency setup

1. Create an opportunity, provide a value against opportunity
2. Edit value of opportunity. Does the value get recalculated? Why / why not?
3. Change your currency in user record to INR. What happens to how opportunity value being displayed – will it continue in default currency /change to INR?
4. Go to Setup > Manage Currencies. Add INR, HKD. Set exchange rates
5. Do you now see any difference in calculation when opportunity currency is changed?

### Inline reports

1. Create 2 distinct inline reports against an opportunity list
2. Change the chart types
3. Change filter in the opportunity list. What happens to the chart?

### Create Quotes

1. Create at least 2 quotes, generate PDF
2. Create an email template to send quotes. Decide content yourself, but PDF of quote needs to be attached
3. Create multiple opportunities against quote – with a different pricebook

### Approval flows

1. Create a simple approval flow against opportunity with owner as SR1 so that approval needs to be sent to SM1
2. Create a simple approval flow against quote similar to the one you created above
3. Create opportunity/ quote to test approvals. Login as SM1 to test how to approve records

### Modify Sales Path

1. Create a new opportunity stage called ‘Olden’. Update stage to ‘Olden’ to at least 2 opportunities

## Teaching Aids

### Presentation

#### 1. Sales Cloud: sf-cog

&nbsp;

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTaehspHKzHPTKM5dnq0MfsCNta-LnIK-H4SKeW99liVLL5yjxL5zIILRe55vNqEw/embed?start=false&loop=false&delayms=60000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-cog)
