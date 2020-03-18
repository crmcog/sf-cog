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

#### 1. UI Customisation: SF-Monkey

&nbsp;

  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTGmM_bl_ZntVLzPdMe88qUbqEVshiV4hZCD6stAERacDQRgSwk-suvK2lyfEPk8Q/embed?start=false&loop=false&delayms=60000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-monkey)
