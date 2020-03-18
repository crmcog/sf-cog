---
title: Sales Implementation for MD & Company
lang: en-US
team: 1-2
difficulty: Moderate
time: 4 hours + 10 min presentation
deliverables:
  - Completed application
  - Design document
  - Presentation
---

#### Scenario

MD & Company is headquartered in Bangalore. It is known for its packaged foods including –

1. Good Potato Chips
2. Better Tapioca
3. Good Noodles
4. Good Coco Cookies

MD has generated moderate interest in South India with its products, but a lot of its operations are in Karnataka alone. MD operates through a chain of distributors, large retail and wholesale chains including Big Bazaar, Nilgiris, and Metro.

MD wants to improve its prospects in South India in the next one year. It has drawn up an aggressive plan to recruit more sales reps in four Southern states, revitalize the IT systems to provide a good base for future country expansion, and grow top-line revenue by at least 20% YoY.

The Sales Director has asked for your assistance to create a Salesforce based system for their sales reps and managers. He has laid down the following high-level objectives for you to think through and suggest future course of action.

1. Implement a common system for sales reps and managers (internal) and distributors
2. Create a sales organization that starts from Chief Sales Officer, Sales Director, State Sales Leads, Zone Sales Leads and Sales Reps.
3. Reps should be able to access past and future business prospects of large retail and wholesale chains, but are not interested in seeing Distributors who are local to specific zones
4. Reps should be able to create and manage opportunities, create leads, accounts and contacts, and track their activities on a calendar. Managers should be able to see their subordinate calendars, and customer records to back them up in case of non-availability
5. Distributors can create request orders for new inventory, transfer requests to other distributors, return orders for damaged goods. Distributors do not see sales information from other distributors
6. Capture orders from all types of customers and capture value. Tag inventory to orders
7. Calculate pricing for all orders
8. Inventory (in boxes) are transferred to Distributor. Distributor maintains inventory directed to dealers, and returned.
9. Retail returns, damaged goods must be summed up to form ‘Bad Goods’ - updated against Distributor on a quarterly basis. Historical information is required to be maintained
10. Similarly, goods sold should be summed up to form ‘Sold Value’
11. If distributor has 120% of capacity of inventory, place orders on hold and send email to distributor and Sales Manager
12. If Goods at distributor have not been moved/sold even after 12 weeks of transfer, place new products of similar type on hold and send email to distributor and Sales Manager
13. If Sold Value in a quarter is more than \$1 Cr., create special pricing for distributor that offers an additional 0.2% discount on orders in the next 3 months
14. Enable Sales Manager to check performance of reps vs. distributors in the application – sold value, bad goods etc. Ability to capture activities and lessons learnt

#### Prepare

- Prepare a chart of users of application and the hierarchy and data visibility requirements
- List the processes and map them to stakeholders
- Create high-level design
- Identify the Salesforce components and customization

#### Develop

Create the app in your existing Salesforce org. Create at least 10 sample data points for the presentation.

#### Present

- Choice of automation and validation rules
- User interface – OOB vs configured through Lightning or Visualforce
- Batch jobs vs. performing calculations/automation in real-time
