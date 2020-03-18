---
title: Service Implementation for Groot Life
lang: en-US
team: 2
difficulty: Moderate - Hard
time: 4-6 hours + 20 min presentation
deliverables:
  - Completed application
  - User stories
  - Design document
  - Documented test cases
  - Presentation
---

#### Scenario

Groot Life is in the business of medicinal research and manufacture for two years. They are head-quartered in New Delhi and have operations in Southern Asia.

Groot has two products in the market currently –

- Grutol – acetaminophen base (think paracetamol)
- Kipirin – an acetylsalicylic acid based drug (think aspirin)

Groot uses SAP its sales and back-end operations. Although they have a functioning operational system, they are looking at optimizing existing business processes and bring customer centricity in their support processes.

The CTO has decided to use Salesforce to revitalize customer services for Groot. The customer services mainly take care of –

1. Operating call centres in India and Bangladesh. They have toll-free numbers in India, Bangladesh, Sri Lanka and Myanmar
1. Operate a support website where health care professionals and consumers can check on any existing issues in Groot products, provide feedback and log complaints.
1. Collate inquiries, feedback and complaints from their call centre, the support website and the main website of the company. These requests typically have a product associated with them, and
1. Service Rep will evaluate the inbound request and determine whether they need quality attention. She will assign request to Quality dept. for further investigation
1. Any sales inquiries are passed on to sales dept, which work on SAP
1. For the rest, Service Rep provides schedule calls with the requester if needed, discusses the issue with internal departments, document and share answers to requester and close tickets
1. Service department has the following structure
   - Service Lead (Country)
   - Service Manager
   - Service Rep
   - Country Service Lead reports to COO, who in turn reports to CEO

The key objectives for the Service implementation are -

1. Create and track service requests. Notify the requester whenever there is a change in status
2. Fully auditable actions. Meeting records, any activities and updates must be logged and traceable to the support personnel
3. Ability to surface any complaints that may impact the entire batch of medicines
4. Track support efficiencies – average time to close tickets, activities around support tickets, type of tickets. It will be delightful if the metrics can be tracked at the call centre level and rolled up to the organization
5. Service Manager is concerned about his own operations, while Service Lead wants to know what is going at the country level. COO is concerned with overall services
6. All of the roles up to the COO logon to Salesforce

#### Prepare

- List the processes (preferably in a process flow) and map them to stakeholders
- Create high-level design
- Identify the Salesforce components that you need to use

#### Develop

- Create the app in your existing Salesforce org.
- Create at least 10 sample data points for the presentation.
- Test results should match records in the app – do not modify records once tested.

#### Present

- Your design, process flow, and parties with access to your systems
- Your view of support from AppExchange for the given business problem
- How is Service different from Sales?
- What will help support personnel do their work quickly – through thousands of service requests coming their way on a monthly basis
- How can sales and service collaborate across systems?
