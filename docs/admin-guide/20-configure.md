---
title: Configure Custom Functionality
lang: en-US
permalink: /admin-guide/configure-custom-functionality
metaTitle: Configure custom functionality on salesforce.com platform.
meta:
  - name: description
    content: Study configuration as part of salesforce admin certification prep.
  - name: keywords
    content: salesforce-configuration
---

# Configure Custom Functionality

To restate what we cover here -

1. Configure = clicks
1. Customise = use code

This is just for clarity and simplicity of the language used here. More than few organisations use the terms interchangeably and the terms mean more or less the same. So 'configure custom functions' is a pun on itself, and on us.

In this section, we will start seeing a bit of how we can add functionality to salesforce using clicks. By now you should have an org to begin your click-click adventure.

In Salesforce, adding new functions can be -

1. Adding new entities. For e.g. I want a `Health History` for Contacts that is not available out of the box
1. Adding new screens for people to work on (called UI = user interface)
1. Adding new validation rules. For e.g. contacts must have a middle name (so make contact middle name mandatory)
1. Adding automation flows. For e.g. whenever I create a contact, also create an activity to send them a welcome kit

While each of (2) - (4) can be done on entities provided by Salesforce, we often find the need to support businesses by adding even more entities to the mix. All these entities are "Objects" in Salesforce. We can modify existing objects are create new.

## Objects

As we have seen earlier - objects represent entities. Standard objects are those provided by Salesforce, while you (or package vendors) create custom ones.

Objects can be roughly thought of as -

- 'model' layer of a MVC pattern
- ..and at the same time 'tables' of the app

They themselves do not store data, but are the only window to access said data. User interfaces are built on top of the fields, validation, and automation added to objects.

### Standard Objects

Salesforce provided objects are more than enough for many small to medium businesses out there :). As soon as you buy Salesforce or create a dev edition, they are very much in your face. Just navigate to 'Sales' or 'Service' apps through the 'app' icon if you don't see anything.

A few examples -

1. Contacts, Accounts
1. Activities, Opportunities, Leads, Cases
1. Notes, Files

Salesforce smartly bundles all the things that you could do against objects under, well, "Object Manager". Navigate to `Setup` | `Object Manager` tab to see examples.

<img src="./img/sf-setup-objects.png" width=600/>

Keep in mind while thinking about these entities -

1. It is easier to extend current entities than to create new ones. For e.g. you can create a new field called `Super Strengths` in `Contact` rather than creating a new entity called `Super Strengths` with a field called `Strength`. Both options have their usage, but you must know the simpler option
1. Keep scalability in mind. Don't over-engineer by creating entities that you may never need.
1. Standard objects have their limitations on what you could customise (e.g. defining relationships that involve a Salesforce object)
1. There are limits on the number of new entities you can add

### Custom Objects

When out of box objects are simply not enough, you create custom objects which are local to your org.

For e.g., a retail company can create -

1. Trade Promotions
1. Planograms (that show images of product placements in shelves)

Custom objects may also be created through the packages installed in the org. All custom objects have a `__c` suffix against their name - whether created by you or the package.

The typical cycle to create new custom objects is -

1. Evaluate the use case / requirement. Identify the need for a new object
1. Design entity / fields / relationship with other entities
1. Design security rules - who will see and update data stored using the said entity
1. Design efficient ways of working with this entity - including UI, automation and validation rules
1. Create stuff as part of a project - in your development environment
1. Deploy the changes for testing. Test and fix things that may not be working as expected
1. Deploy changes to production as part of the project roll-out

## Object Relationships

### Lookup

### Master Detail

### Others

### Data Security

#### Data Security in Objects

#### How security is enforced in relationships?

#### UI Layer Security

## Fields

## Introduction to User Interface

## Workshop

Activities in this section will overlap with subsequent lessons. Plan to discuss with instructor and complete them as early as humanly possible.

| No. | Type    | Description                                                                | Time (hrs) |
| --- | ------- | -------------------------------------------------------------------------- | ---------- |
| 1   | Read    | Case study overview and map objects                                        | 0.5        |
| 2   | Do      | Create relationship diagram, provide attributes and discuss                | 2          |
| 3   | Do      | Create roles and profiles/permission sets                                  | 1.5        |
| 4   | Present | Discuss objects, relationships and roles                                   | 2          |
| 5   | Do      | Create basic apps, objects and views                                       | 2.5        |
| 6   | Do      | Create dummy users with different roles – doctors, CC, nursing, admin, CxO | 0.5        |
| 7   | Do      | Setup data – facilities, patients, care. Test data access rules            | 2          |
| 8   | Do      | Setup activity types                                                       | 1          |
| 9   | Do      | Cross check fields & attributes with indicative list                       | 0.5        |

### Overview

UC Hospitals is a leading hospital chain with branches in Bangalore, Chennai and Mumbai. It specialises in generic treatments, emergency care, corporate medical check-up and treatments. The CEO ‘Rajesh Pradhan’ has recently taken over the reins of the company and has committed to aggressive expansion to heal people everywhere.

UCH has chosen Salesforce as the application for managing their customers, and generic admin work at hospitals. UCH has tasked you and your team to develop a solution on Salesforce.com platform.

#### Facilities

Facilities include –

1. Building: each branch has its own building
2. Ward – Private (1 bed), Semi-private (2 beds), General (6 beds)
3. Staff Room – Doctor, Nursing staff
4. Lab – Blood, Pathology, X-ray

Chennai and Mumbai have one branch each, while Bangalore has 3 branches in North, South, and East. Every branch has 10 private rooms, 15 semi-private rooms and 20 general rooms for patient treatment.

#### Roles

UC Hospitals has the following roles in each of their centres –

1. Doctors
2. Housekeeping – Staff for cleaning, upkeep and maintenance

Following roles are shared within the city –

1. Admin Head
2. Admin Assistant
3. Finance Analyst
4. Sales Reps
5. Sales Manager
6. Nursing /Examination Staff
7. Customer Care Specialists (also known as service reps)
   - Receptionists
   - Facilitators who are affiliated to doctors
8. Service Managers
9. Regional Manager

Sales and CC Reps answer calls related to sales or service when users call the centralised call centre.

Admin Assistants report to Admin Heads in the city, while Admin Head reports to COO. Sales Managers and Service Managers also report to COO. All finance analysts report to CFO. COO and CFO report to CEO.

#### Profiles and Permission Sets

- Admin can view accounts, contacts and edit/view facilities in their own city
- Finance analyst can view facilities, accounts, and contacts
- Sales reps and sales managers can see only accounts, contacts in their own city
- CC can view and edit patient data in their own branch
- CC can view patient data from a different branch, but would need to request access to the service manager to edit patient data
- Housekeeping can view facilities
- Nursing Staff can view patient data from their own branches, and view/edit examinations and treatments
- Doctors can view patients who are affiliated to them, and recommend “examinations” and “treatments”
- CxO can view all data

#### Customers

UCH deals with two major types of customers –

1. Corporates - Large corporates, small to medium sized companies
2. Households – Households that consist of individuals

Patients and contacts are segregated for logistical reasons. Patients are divided into inpatient and outpatients. The storage of data is centralized so that customer care specialists, service & sales specialists can have access to data outside of the branch.

#### Care

Doctors recommend examinations which are recorded in SFDC. Individual facility (e.g. X-Ray) provide examination services based on the recommendation. Nursing care needs to be added automatically per day for inpatients only.
Medicines and further tests may be prescribed to patients. These are recorded within SFDC as well.
Care types done through examinations are already mentioned earlier.

#### Activities

Setup activity/event types/services –

| Role          | Activity Type                                                                   |
| ------------- | ------------------------------------------------------------------------------- |
| House Keeping | Minor Maintenance, Major Maintenance, Repair, Cleaning, Cleaning L, Cleaning XL |
| Doctors       | Record case history and comments                                                |
| Nursing Staff | Record observation – vitals and health data                                     |
| CC            | Log outbound and inbound calls, make appointments, log visits, log feedback     |
| Patient       | Visits, Admission                                                               |

#### Indicative Fields

| Entity    | Fields                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| Doctor    | Id, First Name, Last Name, Education, Specialisation, Phone Number, Mobile, Email, Patient Id, Available Hours Start / End |
| Patient   | Id, First Name, Last Name, Do not call, Phone Number, Mobile, Email, Home Address, Household, Corporate                    |
| Care      | Type, Service Facility, Medicine Name, External/Internal, Fees                                                             |
| Customers | Type, # Covered, Potential Value, Start Date, End Date, Status, Last Activity Date                                         |

## Teaching Aids

### Presentation

#### 1. Configure Custom Functionality: SF-Monkey

&nbsp;

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRINqBiMv2SE6j8WUDrkDRSO6H7GZm72wp0dC8PE-VRWq3t3hbN5lsweWAYNfIaCQ/embed?start=false&loop=false&delayms=60000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-monkey)
