---
title: UI Customisation
lang: en-US
permalink: /admin-guide/ui-customisation
autoNext: 80-service-cloud
metaTitle: UI customisation deep-dive
meta:
  - name: description
    content: Learn how to customise UI as part of ADM201 certification study.
  - name: keywords
    content: customise-ui
---

# UI Customisation

We previously mentioned that we will be back with more of UI. And.. here we are.

Before starting all that - let us just put this forward this very simple message - "you are awesome". Not because you are here and reading this page, but because you are learning something new and taking your career to newer heights!

Back to Salesforce UI.

## What is Salesforce UI?

Salesforce UI allows you to configure and composition pages /screens to capture information and display data. There are many features that make Salesforce UI really good -

1. Enables quick build out of UI components -
   - define business layer, fill in a few attributes and a configured UI with all relationships is generated
   - drag and drop "stuff" to build UI layouts or entire pages
   - do additional configuration to change layouts, and provide advanced functionality
1. Compose UI by assembling UI components. Lightning components can come together to form beautiful and functional UIs
1. Security is enforced for UI access through profiles / permission sets
1. Allows personalization – e.g. users can create their own lists, customise dashboards, or hide fields
1. Allows seamless integration of business logic through selective filtering of data, record types for variable layouts

The typical components of Salesforce UI are below -

- Typical Terms
- Apps
- Tabs
- Detail and List Views
- Fields
- Home / App / Record pages
- Visualforce page
- Lightning & Visualforce Components

The following diagram outlines UI elements and how they relate to each other -

![salesforce-ui-elements](./img/salesforce-ui-elements.png)

When dealing with Salesforce UI, you will often hear Lightning UI framework and talks of Salesforce Classic. We have seen that before - we will try to focus more on Lightning since that is where Salesforce is going in the future. Lightning UI will work on typical form factors (e.g. desktop, tablet or phone), and provides an user experience atypical to a modern app.

## Start configuring Salesforce UI

A common structure followed to configure UI will include following steps -

1. Create Page Layouts
1. Create List / Detail Views
1. Create Quick Actions / Buttons
1. Related Lists
1. Use Lightning App Builder to configure screen

## UI Configuration

### Create Page Layouts

### Create List and Detail Views

### Create Quick Action / OOB buttons

### Use Lightning App Builder

Lightning app builder is used to create three different types of pages -

- App page - home page for the app
- Home page - provide a home page for a specific entity 
- Record page - provide a detail page. Reuses layouts of the entities

Whenever we say "detail pages", we indeed refer to "record page". App and home pages provide a dashboard in the context of the app or entity type, which can have charts, quick navigation links, etc.

You can invoke the Lightning page builder in more than one context.

#### Setup > Lightning App Builder

Invoke Lightning app builder from **Setup** > **Home** > **User Interface** > **Lightning App Builder**.

Click **New** in the Lightning Pages list and click away to create a new page.

### Show and hide related lists

Salesforce data model is made up of many specific entity types and tens of related entities to the said entity.

We have seen that related lists can show the records that are tagged to the parent record in a 1:M or M:M fashion. This enables the user to get a quick overview of the parent record (for e.g. account ) and the many related records (for e.g. Account's opportunities, orders, activities, etc.).

There are a couple of ways to control related lists -

#### Layouts

While defining the layout for the parent record, you may view/hide the related lists in the same layout. 

![salesforce-related-list-layout](./img/salesforce-related-list-layout.gif)

#### Lightning page builder

Using Lightning page builder you can -

- add / remove standard related lists 
- include Lightning components that display related entities

You can conditionally display any component in Lightning page builder - the same applies for related lists as well. For e.g. you may display the related list only when the account goes to 'Approved' status. 

#### Custom UI

Use Lightning framework or Visualforce to show detail page along with custom related entities.

#### Setup > Object Record Pages

You can create Record pages by navigating to **Setup** > **Object Manager** > Drilldown on an object > Click on **Lightning Record Pages** in the left navbar > Click **New** and go crazy. (technically you can create any page once the page builder wizard starts up)

![lightning-page-builder-record-page](./img/lightning-page-builder-record-page.jpg)

#### Setup > Edit Page

If you are on a page that needs editing here and now -

1. Make sure you are on the right page
1. Click on the `cog` icon on the right, click on **Edit Page** to edit the page in Lightning App Builder

### Data-driven behaviour for UI

#### UI security rules

#### Record types

Record types have far reaching implications than mere UI - read on to delve into their exciting world.

Record types make it possible to provide super powers to an object and personalise itself based on data.

You can create record types by going to **Setup** > **Object Manager** tab > select an object and drilldown > Select **Record Types** in the left navbar.

![salesforce-create-record-type](./img/salesforce-create-record-type.gif)

1. Click on **New** to create a new record type
1. Provide a label, description
1. Provide access to the new record type to one or more profiles
1. You can select a default layout for record type for all profiles, or provide distinct layouts 
1. Save!

You can now change the record type for any specific record.

![salesforce-change-record-type](./img/salesforce-change-record-type.gif)

Record types change behaviour in multiple ways-

1. Display distinct UI layouts: You can specify the same or different layouts for profiles when records belong to a specific record type
1. Display distinct picklist values (if selected)
1. Enable different business processes to be applied to a record

Record types provide a powerful way to enable personalised UI for records based on the value. For e.g. -

1. Sales reps may need to focus on different fields when the account record type is 'wholesale' as compared to a more boring 'retail' customer
1. Sales managers and sales reps may need to see different fields for the same 'wholesale' customer
1. Provide different sales processes for retail and wholesale customers in opportunity functionality

## Reports

No UI discussion is complete without reports.

Reports and dashboards (a collection of related or independent reports) are easily configured in Salesforce.

The typical life cycle for creation of reports -

1. Create report types
1. Create reports
1. Create dashboards
1. Include reports in customised UI (if relevant)

### Create Report Types

### Create reports

#### Report filtering and bucket fields

### Dashboard and Related reports

### Inline/in-view reports in Lightning vs Classic

## Security for reports and dashboards

## Customising Salesforce UI

So far, we have seen how you can configure Salesforce UI. As you would have seen, configuring UI is quick, painless, and easy to maintain.

At the same time -

1. UI has defined layouts (a list has to be fields arranged side-by-side, a form has fields arrayed in an x-column layout)
1. Standard layouts may not allow complex operations (for example: interact with a rich text box to show spelling mistakes, or showing activities in a colour-coded calendar)
1. It is not possible to go out of standard UI behaviour - e.g. clicking on fields to edit record, pop-up edit for parent/related records, etc.

The Salesforce-standard behaviour may be changed by customising UI. This customisation is not an administrator function, but all good administrators should be aware of what the system can do. So, here's a sneak-peak at customisation options.

There are two distinct ways to customise Salesforce UI -

1. Lightning UI - will be used as default. You can use Lightning framework to create components by writing in code. These components can be assemble together by developers or administrators to create Lighting pages
1. Visualforce - used to create pages for Salesforce Classic (but can also be useful to create Lightning UI in niche case - we will not go there for now)

![salesforce-ui-customisation](./img/salesforce-ui-customisation.png)

A few points to note about the two options -

- Visualforce is page centric, while Lightning allows entire applications to be assembled
- Ability to reuse Lightning components within org and from AppExchange is very powerful. This allows admin/designers to create advanced apps without developers
- Convert Visualforce pages to Lightning with simple stylesheets (for OOB components)
- It is possible to use Javascript or custom front-end frameworks and work with Salesforce.com APIs for very niche needs

## Workshop

| No. | Type | Description                                | Time (hrs) |
| --- | ---- | ------------------------------------------ | ---------- |
| 1   | Do   | Create / rename app                        | 1          |
| 2   | Do   | Create UI for all related entities         | 1          |
| 3   | Do   | Create quick actions                       | 0.5        |
| 4   | Do   | Reuse Lightning component from AppExchange | 0.5        |
| 5   | Do   | Explore Salesforce UI on mobile app        | 0.5        |
| 6   | Do   | Create reports & dashboards                | 1.5        |
| 7   | Do   | Create lists – private and public          | 0          |
| 8   | Do   | Create and explore record types            | 0.5        |

### Create/revise app

1. Create or rename app - call it “Healer Elite”. Select an icon and publish app
2. Create an app page and expose that to all roles
3. Create three different types of record pages for Visits – doctor, CC, Manager. Use same views for now – this can be changed later
4. Create two different home pages for doctors and CC – retain same views or change them

### Create / revise UI for all related entities

1. Show fees in UI only if there is one or more record
2. Do now show “Contacts” in Patients tab

### Create quick actions

1. Create quick actions to trigger a manual reminder email on user click against scheduled visit
2. Create a quick action to open Paypal home page when clicked against the visit. This will be finally used to accept fees through Credit/Debit Cards

### Reuse Lightning component from AppExchange

1. Use AnyCalendar in your UI (for Visits) - [https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000Ev8qpUAB](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000Ev8qpUAB)
2. Group related list against Visits – open and closed visits [https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYDY4UAP](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYDY4UAP)
3. Use enhanced lightning grid for at least one of your related lists [https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EVK8iUAH](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EVK8iUAH)

### Explore Salesforce UI on mobile app

1. Download Salesforce app from Android Playstore
2. Explore Salesforce app and discuss how UI/quick actions are laid out in the mobile device vs. desktop browser
3. Make change to Doctor list view in the Lightning Experience for compact layout, list and detail views. Make note of changes within Salesforce app

### Create Reports & Dashboards

1. Create reports –

   1. List report to show all visits in a current month and last month.
   1. List of visits, patients grouped by doctors with a chart representation
   1. Total fees against doctors, rolled up to branch, city and overall hospital
   1. Month-wise utilized vs. unutilized beds
   1. Potential vs. accrued fees for doctors – consider availability of 1 hour = Rs. 10,000 fee potential
   1. Total fees for visits by branch, city and overall hospital for the last one year. Apply “Additional State Taxes” of 1% for Bangalore, 1.1% for Chennai, 1.4% for Mumbai to calculate final fee
   1. No. of patients managed by individual CC

2. Create dashboard –
   a. Dashboard to show four of the above reports in one screen

3. Enable reports for `1.4`, `1.5` & `1.6` (as listed above) to be viewed by manager and above

### Create private and public lists

1. Create ‘Scheduled Visits for Day’ public list to show scheduled visits with start date as that day
2. Create a public list that shows only dormant customers
3. Select any five visible contacts, collect ids and create a private list that filters only those records. Name it “My De-hospitalized Patients”

### Create and explore record types

1. Create record types for corporate and household customers.
2. Create at least 4 fields specific to record type. Fields need to be visible only for the specific record types

   - Corporate: TAN, Headquarters Address, Corporate Insurance, HR Contact, Account Owner, Designate for Medical Check-up?
   - Household: No. Sr. Citizens, No. < 5 years, Multi-city?

3. Create a field “Status”. Values must differ as per the customer type

   - Corporate: Proposal, Expired
   - Household: Initiated, In Progress, Active, Dormant

4. Only Account Owner should edit the field “No. of Employees”, “Potential Value” for corporate customers

## Teaching Aids

### Presentation

#### 1. UI Customisation: sf-cog

&nbsp;

  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTGmM_bl_ZntVLzPdMe88qUbqEVshiV4hZCD6stAERacDQRgSwk-suvK2lyfEPk8Q/embed?start=false&loop=false&delayms=60000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-cog)
