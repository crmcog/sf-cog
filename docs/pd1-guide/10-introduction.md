---
title: Introduction
lang: en-US
permalink: /pd1-guide/introduction
metaTitle: A quick introduction to salesforce.com platform, becoming a developer, and PD1 certification.
meta:
  - name: description
    content: Get started on your journey to becoming a Salesforce.com developer.
  - name: keywords
    content: PD1-introduction, certification-study, course-structure
---

# Introduction

## Workshop

Workshop section in each chapter provides a set of activities that the students need to do after the theory and practice classes for individual lessons in the Salesforce Platform Developer I course.

The intent is to provide -

1. practical, real-world problems: Outline business scenarios and specific problem statements that require students to apply their salesforce.com learning (well, to 'some' extent)
2. solution details: Provide high level design elements to solve afore-said problems.

**Instructions**

1. Discuss problems/solutions with your instructor(s) in case of any queries
2. Complete the activities before bringing in your unique perspectives and/or solutions to the problem

**Outcome**

The problems provided are expected to incrementally build the complexity of your application as you progress. You will be a better admin, IT analyst or developer who can analyse a problem, think through possible solutions, and identify & implement changes on salesforce.com platform.

Let's dive into our very first workshop.

Complete the following activities.

| No. | Type    | Description                     | Time (hrs) |
| --- | ------- | ------------------------------- | ---------- |
| 1   | Present | Multi-tenancy                   | 0.5        |
| 2   | Learn   | Soft-skills: Trailhead          | 3          |
| 3   | Learn   | Skills: Trailhead               | 2          |
| 4   | Read    | Case Study Overview             | 0.5        |
| 5   | Do      | Prep Salesforce Org for project | 2          |

### Multi-tenancy

1. Think through how multi-tenancy helps? How is segregation of data / logic done?
2. How have you seen it implemented in SaaS you know – e.g. Gmail, Google docs,
3. What are the challenges?
4. Present to an audience

### Soft-skills: Trailhead

Complete the following

- [Manage SFDC story telling](https://trailhead.salesforce.com/en/content/learn/modules/manage_the_sfdc_storytelling)
- [Transform business Salesforce expeditions](https://trailhead.salesforce.com/content/learn/trails/transform-business-sf-expeditions)

### Skills: Trailhead

Complete the following

- https://trailhead.salesforce.com/content/learn/trails/salesforce_advantage

### Workshop Case Study Overview

GA Automobiles is a small car manufacturer with operations in India, Sri Lanka, and Bangladesh. GA has decided to use Salesforce for its sales and service operations, and has asked you to implement a customized Salesforce application for their needs.

GA has four models in market:

- Model A
- Model B
- Model C
- Model M: Sold only in India

GA sells cars to retail customers and corporates directly and through its dealer network. Dealers must have access to same service records that GA uses and to opportunities that are assigned to partners. GA also routes services to partners in respective regions if customers contact through the central call centre.

#### Corporate Structure

GA’s sales business is divided into North, East, South, West, North-East in India, with a regional sales manager in all regions. Bangladesh has North and South regions, and Sri Lanka has one region. Following key positions are part of the sales organization.

| Position               | Reports to             |
| ---------------------- | ---------------------- |
| Country Sales Manager  | CEO                    |
| Regional Sales Manager | Country Sales Manager  |
| Sales Manager          | Regional Sales Manager |
| Sales Rep (Corporate)  | Sales Manager          |
| Sales Rep (Retail)     | Sales Manager          |

GA’s dealer network sells its cars at city/district/state level, and they are managed through Regional Partner Managers, who report into Country Sales Manager.
GA provides services through a Service network, but also runs a centralized call centres per country to provide sales and service assistance to all customers.

Service organization comprises of ..

| Position                 | Reports to              |
| ------------------------ | ----------------------- |
| COO                      | CEO                     |
| Country Service Manager  | COO                     |
| Regional Service Manager | Country Service Manager |

Regional partners connect with regional service manager for management assistance.

The call centres are staffed with one or more of ..

| Position         | Reports to       |
| ---------------- | ---------------- |
| Call Centre Head | COO              |
| CC Manager       | Call Centre Head |
| CC Lead          | Service Manager  |
| CC Rep (Sales)   | CC Lead          |
| CC Rep (Partner) | CC Lead          |
| CC Rep (Service) | CC Lead          |

- CC Leads and CC Reps specialise in either sales or service
- CC Rep (Partner) takes only calls from partners – dealers or service network

The Marketing department comprises of Marketing Country Manager and one or more of Marketing Lead and Marketing Reps.

#### Customer Management

GA has two types of customers –

- Corporate: Any business that buys cars
- Retail: Retail customers who buy through GA show rooms

All customers who buy through dealership also get registered as customers – either as Corporate or retail

#### Marketing Operations

Marketing is responsible to run campaigns in various media sources.

#### Sales Operations

Sales reps receive leads through

- call centre (inquiry)
- walk-in at showroom

The team follows up to convert leads and the process culminates in –

1. Sale through company owned showroom
2. Referrals to partners in the region
3. A lost deal

The process for corporate & retail customers is distinct.

| Category      | Corporate                                                                | Retail                                                            |
| ------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Attributes    | Company Type (SIC), Annual Revenue, # Employees, Countries of Operations | Annual Income, # Cars in Household, # Other Vehicles in Household |
| Sales process | Interest > Opportunity > Quote > Negotiation > Won or Lost               | Interest > Opportunity > Won or Lost                              |

#### Service Operations

All service requests are assigned to service networks based on customer preference and availability of service slots. Customers can request for service through self-service too.

Service orders and vehicle service history are tracked centrally and viewable by all service partners. The pricing of the parts/service can be viewed only by partners owning the service and by employees of GA.

Service personnel also follow up with customers for feedback, measure service efficiencies from partners, and organize service trainings for partners.

#### Partners

Partners can be one of –

1. Sales
2. Service
3. Suppliers

Partners can have their branches and company/parent company relationship defined in Salesforce. Parent companies may have one or more of partnership types defined against them.

#### Sales partner

- Has own sales show room – identified by name, city and a unique code
- Has sales targets provided by GA and agreed by partner
- Requests for new cars from company

#### Service partner

- Has service workshop – identified by name, city and a unique code
- Can request for parts
- Can see service request history for a given vehicle

#### Customers

- Can be corporate or retail customers.
- Existing customers are viewable by all partners
- New leads are viewable only to assigned partners

### Prep Salesforce Org

1. Sign up for Developer edition / trial edition.
2. Discuss entities that need to be used for GA
3. Discuss user groups required to use Salesforce
4. Create basic structure in Salesforce

## Teaching Aids

Each chapter is accompanied by teaching materials that (hopefully) help you present the course material to students in a structured way. There may not be a 100% match between the lessons/chapters and the presentation materials considering the distinct sources of the teaching aids, but do conform to the underlying structure.

### Presentation

#### 1. Introduction to PD1 Certification Course: SF-Monkey

&nbsp;

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQECwkCtXtlifG4eZL5gG3ZRqgVEs2mXvw3jRLmU5DHWl6xZQkFVNYMBYRNsEXf7Q/embed?start=false&loop=false&delayms=60000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-monkey)
