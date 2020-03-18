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

# Introduction

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
