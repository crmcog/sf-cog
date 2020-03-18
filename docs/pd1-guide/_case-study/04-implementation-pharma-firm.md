---
title: Service Implementation for Groot Life
lang: en-US
team: 1-2
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
- Kipirin – an acetylsalicylic acid-based drug (think aspirin)

Groot currently has well-invested system in SAP for its sales and back-end operations. Although they have a functioning, operational system, they are looking at optimizing existing business processes and bring customer centricity in their support processes.

The CTO has decided to use Salesforce to revitalize customer services for Groot. The customer services mainly take care of –

1. Operating call centres in India and Bangladesh. They have toll-free numbers in India, Bangladesh, Sri Lanka and Myanmar
2. Operate a support website where health care professionals and consumers can check on any existing issues in Groot products, provide feedback and log complaints.
3. Collate inquiries, feedback and complaints from their call centre, the support website and the main website of the company. These requests typically have a product associated with them, and
4. Service Rep will evaluate the inbound request and determine whether they need quality attention. She will assign request to Quality dept. for further investigation
5. Any sales inquiries are passed on to sales dept, which work on SAP
6. For the rest, Service Rep provides schedule calls with the requester if needed, discusses the issue with internal departments, document and share answers to requester and close tickets
7. Service department has the following structure
   a. Service Lead (Country)
   b. Service Manager
   c. Service Rep
   d. Country Service Lead reports to COO, who in turn reports to CEO

The key objectives for the Service implementation are -

1. Create and track service requests. Notify the requester whenever there is a change in status
1. Fully auditable actions. Meeting records, any activities and updates must be logged and traceable to the support personnel
1. If there are more than 5 complaints raised on same batch, send email to Service Manager and Service Lead (Country) for further action
1. Ability to capture inquiries, feedback from an embedded form that can change as per product attributes
1. Create a guided interview to receive complaints including –
   - Inquiry or complaint - Nature of call not mentioned, needs to be determined
   - Complaint - product issues, side-effects, issues with dealers, packaging issues, manufacturing issues
   - Inquiry - product inquiries
1. For guided interview of a complaint, capture/consider -
   - Nature of complaint
   - Is there Death or disability (Sev 1)?
   - If no Sev 1: cause and effect
   - Attach report from a health care professional
1. Route complaint to Quality Department queue. Route all inquiries to Inquiry Mgt. Team
1. Create a complaint debugging checklist and activity with target dates and owners as per template provided at the country / product combination. Country / product / activity types should be configurable – get from a table / static file
1. Ability for rep to quickly check last 5 complaints of a product along with provided solutions – real-time on customer call
1. Ability to anonymously create complaints for internal employees using a quick complaint form

#### Prepare

- List the processes (preferably in a process flow) and map them to stakeholders
- Create high-level design
- Identify the Salesforce components that you need to use

#### Develop

Create the app in your existing Salesforce org. Create at least 10 sample data points for the presentation.

Test results should match records in the app – do not modify records once tested.

#### Present

- Your design and process flow
- Choice of options for automation and validation rules
