---
title: Deployment
lang: en-US
permalink: /pd1-guide/deployment
metaTitle: Salesforce deployment processes and best practices.
meta:
  - name: description
    content: Learn Salesforce deployments, migrations and practices to efficiently migrate configuration, customisation and data across environments.
  - name: keywords
    content: lightning
---

# Deployment

## Workshop

Complete following tasks.

| No. | Type | Description            | Time (hrs) |
| --- | ---- | ---------------------- | ---------- |
| 1   | Do   | Environments           | 0.5        |
| 2   | Do   | Change sets            | 1          |
| 3   | Do   | Use IDE/Ant            | 2          |
| 4   | Do   | Use Unmanaged packages | 1          |
| 5   | Do   | Import data            | 1          |

### Environments

1. Create a sandbox from trial org. If you had been using a developer org: skip (2) – team up with your friend who is using Trial org
2. Configure Git locally. Initialize a new project

### Change sets

1. Create change sets from source environment
2. Import configuration done so far – manual

### Import configuration

1. Create a different sandbox / trial org
2. Use IDE to manually configure objects from one org to the other
3. Deploy changes

### Use unmanaged packages

1. Create unmanaged packaged with the configuration
2. Import configuration in a new environment

### Import data from files

1. Import data from files created in one of the past exercises

## Teaching Aids

### Presentation

#### 1. Deployment: SF-Monkey

&nbsp;

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRkWnX6xZ1AQtSiyiqb7cBtUeRPaXDyFabFqaCabr7CmOjcMrKq5v30EkXWWzob0w/embed?start=false&loop=false&delayms=3000" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[More info](/misc/pricing#sf-monkey)
