---
title: Service Cloud
lang: en-US
permalink: /admin-guide/service-cloud
autoNext: 90-data-management
metaTitle: Service Cloud deep-dive as part of ADM201 certification study.
meta:
  - name: description
    content: Support for sales functions using Salesforce.com Service Cloud.
  - name: keywords
    content: service-cloud
---

# Service Cloud

## Workshop

| No. | Type | Description                       | Time (hrs) |
| --- | ---- | --------------------------------- | ---------- |
| 1   | Do   | Explore cases                     | 0.5        |
| 2   | Do   | Create assignment rules for cases | 0.5        |
| 3   | Do   | Create auto-response rules        | 0.5        |
| 4   | Do   | Create escalation rules           | 0.5        |
| 5   | Do   | Enable email to case              | 0.5        |

### Explore cases

- Explore service console and “normal” UI
- Create solutions/knowledge and associate against case

### Create assignment rules for Cases

1. Create automation –
   - If customer is Corporate, any patient is associated with customer – assign account owner as a ‘Hospital POC’ against visit record
   - Assign any cases created by corporate patients to account owner

### Create auto-response rules

1. Create auto-response rules to trigger when case is created
   - Email details of case to patient
   - Copy email to Account Manager if patient is a corporate customer
2. When case gets resolved, send notification –
   - If query – we hope the query was addressed to satisfaction. Else connect with us to help you better
   - If complaint – complaint stands resolved. Please get in touch with Service manager if not satisfied

### Create escalation rules

1. Escalate to Service Manager if any case is not resolved in 5 days
2. Escalate to Service Manager if cases from corporate customers are not resolved in 2 days

### Enable email to case actions

1. Create email to case function

## Teaching Aids

### Presentation

#### 1. Service Cloud: sf-cog

&nbsp;

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRAOEcIF_w24QtGH5NIV1HyejOYw9HqVPtPyb0WKHj-802wc3pguvpDY-TD2AdMUQ/embed?start=false&loop=false&delayms=60000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-cog)
