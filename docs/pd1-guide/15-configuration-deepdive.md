---
title: Configuration Deep-dive
lang: en-US
permalink: /pd1-guide/configuration
metaTitle: A deep-dive of Salesforce.com configuration.
meta:
  - name: description
    content: Configuration enables a no-code way of creating stuff. Every smart developer needs a clear understanding of when and where to use configuration vs. using code.
  - name: keywords
    content: configuration
---

# Configuration Deep-dive

## Workshop

Complete following tasks.

| No. | Type    | Description                                   | Time (hrs) |
| --- | ------- | --------------------------------------------- | ---------- |
| 1   | Present | Present roles & profiles                      | 1          |
| 2   | Do      | Create roles, profiles & permission sets      | 0.5        |
| 3   | Do      | Create objects, basic attributes and basic UI | 2          |
| 4   | Do      | Enable Chatter                                | 0          |
| 5   | Do      | Create validation rules                       | 1          |
| 6   | Do      | Create calculations                           | 1          |
| 7   | Do      | Create automation                             | 2          |
| 8   | Do      | Create approval rules                         | 0.5        |
| 9   | Do      | Create record types                           | 0.5        |
| 10  | Do      | Create and import data                        | 2          |
| 11  | Do      | Use SOQL / SOSL                               | 0.5        |
| 12  | Do      | Create test cases (basic) and test            | 4          |

### Present roles & profiles

- Discuss profiles and permission sets required
- Discuss role hierarchy

### Create roles, profiles & permission sets

Create all identified roles.

- New customers cannot be created by sales reps, partners
- Opportunities are read-only for service personnel within GA and not visible to
- Leads are visible to sales personnel who have access to associated campaigns
- Leads who are not associated to any campaigns are visible to all managers and above, and only to regional sales reps
- Service history is read-only to sales personnel
- Any pricing is visible to GA employees and to owner partners
- Partners can be created by Partner manager alone

### Create objects, basic attributes and basic UI

Create objects, attributes and basic UI.

- Create vehicles
- Create parts
- Create orders for sales
- Create way to track services and service history
- Create way to track inquiries, feedback (through call centre)
- Create pricing: recommended price lists are per country
- Partners can have their own price lists but need to request partner manager for the change

### Enable Chatter

- Enable Chatter feed in your org and newly created top-level objects

### Create validation rules

- Existing customers cannot be part of more than 2 campaigns at any given time
- New or existing customers cannot be part of more than 4 campaigns at any given time
- Duplicate customer creation cannot be allowed – uniqueness factors are customer name and location
- Corporate opportunities that have been assigned to GA should not be routed to partners
- Opportunity close date cannot be in the future, and cannot be more than a month in the past
- Each Won opportunity must have an associated winning quote (corporate), vehicle (through order or asset). Else don’t allow opportunity closure

### Create calculations

- Last contact date should be visible at customer level and can be the last date contacts for marketing, sales or service
- Last service date should reflect the last service done through authorized centres
- Current customer lifetime value sales & service should be individually calculated
- Flag customer as VIP if total lifetime customer value > 50 Cr.

### Create automation

- Send email to partner manager for every closed opportunity from partner
- Partner discounts `>5%` for sales or `>15%` for service should be notified to partner manager
- Assign loyalty points for customers
  - 10 points per sale
  - 1 point per service. 2 points if service value in a month has crossed Rs. 1 lakh
- Enable reps to send birthday wishes to customers through email with a template specifically created for the purpose. Send emails only for active customers (status is active)
- Create a service schedule for a vehicle based on the vehicle recommended service template and the sale date
- Send service due reminders as per the service schedule tagged against vehicle

### Create approval rules

- Manual flagging as VIP should be approved by Country Sales Manager. Automatic VIP flagging is not subject to approval
- Campaign end date can be changed only by Marketing manager after approval from Regional
- Opportunity > Rs.10 Cr should be approved by Regional Sales Manager (for all types of opportunities)
- Opportunity > 50 Cr should be approved by two levels incl. Country Sales Manager

### Create record types

- Corporate and retail customer types

### Create and import data

**Customer data**

- Create data templates for leads, accounts and contacts
- Create sample data using a data generator (e.g. Free Data Generator)
- Import data

**Sample data**

- Create sample data for opportunities, cases and all other entities with relationships. Test importing the data
  Lead form
- Create lead forms that can be used by partners to directly associate leads through partner websites

**Partner form**

- Create custom form that can be embedded in multiple websites for requesting partner access
- Partner creation will go through partner request process

### Use SOQL / SOSL

- Get service history grouped by partner in the past 6 months
- Get last 10 sales or service transactions for given customer ids
- Get last 5 won opportunities for the partner along with last date on which opportunity was won
- Get total no. of customers per region and per country
- Get total no. of customers with life time value more than 1 Cr. Group by sales and service partner

### Create test cases (basic) and test

- Explore test case creation best practices
- Create test cases for high level transactions
- Test and document test results

## Teaching Aids

### Presentation

#### 1. Configuration Deep-dive: sf-cog

&nbsp;

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRfu_vhfHjlreucmXkA4eCpNIKSAwU0MCya6jytaYnyAWvdIdXUEc8wbDTHEEMwEg/embed?start=false&loop=false&delayms=60000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-cog)
