---
title: What is Cloud Computing?
excerpt: A beginners guide
image: what-is-cloud-computing.png
isFeatured: true
date: '2023-03-15'
---

# How Websites Works

We have a server hosted somewhere, and we as a web browser want to get access to that server to visualize a website.
What we are going to do as a client is use a network, a network between our selfs and the server. The client will find
the network and will use it to route the data into the server, then the server will reply to us and we will get the
response and view the website.

For the clients to find the server and the server to find the client you need to have IP address. The client has an IP
address and the server has an IP address, that way you can send requests to whatever server you want and the server can
know how to find you back.

![How Websites Works](how-website-works.png)

### What is a server composed of?

-   **Compute**: CPU

    -   Responsible for doing computations and calculations.

-   **Memory**: RAM

    -   Very fast memory which allow us to store information and retrieve it quickly.

-   **Storage**: Data

    -   Long term storage data, for example files.

-   **Database**

    -   Store data in a structured way. Easy to seach and query.

-   **Network**: Routers, switch, DNS server

### IT Terminology

-   Network: cables, routers and servers connected with each other

-   Router: A networking device that forwards data packets between computer networks. They know where to send your
    packets on the internet.

-   Switch: Takes a packet and send it to the correct server/client on your network.

![Switch vs Router](switch-vs-router.png)

### Traditional IT

Traditional IT infrastructure is made up of physical hardware, like a desktop computer, which is connected to a network
via a remote server. The server is installed on the premises and gives anyone who has access to the hardware a view into
stored data and applications. When the time comes to scale up, businesses with this IT model typically need to purchase
additional hardware and upgrades which can be quite costly. Often, it is the IT department that is responsible for
installing and maintaining this hardware.

![Traditional IT](traditional-it.png)

### Problems with traditional IT approach

-   Pay for the rent for the data center

-   Pay for power supply, cooling, maintenance

-   Adding and replacing hardware takes time

-   Scaling is limited

-   Hire 24/7 team to monitor the infrastructure

-   How to deal with disasters? (earthquake, power shutdown, fire)

# What is Cloud Computing

Cloud computing is the on-demand delivery of compute power, database storage, applications and other IT resources.
Though a cloud services platform you get a **pay-as-you-go** pricing, which means you're only going to pay for what you
requested, when you requested it and as you use it, when you're done using it, you're not going to pay it anymore. You
can provision exactly the right type and size of computing resources you need. You can access as many recources as you
need. almost instalty, you don't need to order it in advance. Simple way to access servers, storage, databases and a set
of application services.

![Cloud Computing](cloud-computing.png)

### The Deployment Models of the Cloud

-   Pivate Cloud:

    -   Cloud services used by a single organization, not exposed to the public
    -   Complete control
    -   Security for sensitive applications
    -   Meet specific business needs
    -   Example: Rackspace

-   Public Cloud:

    -   Cloud resources owned and operated by a third-party cloud service provider delivered over the internet
    -   Example: Azure, Google Cloud, AWS

-   Hybrid Cloud:
    -   Keep some servers on premises and extend some capabilities to the Cloud
    -   Control over sensitive assets in your private infrastructure
    -   Flexibility and cost-effectiveness of the public cloud
    -   Ecample: On-premises and AWS

### Characteristics of Cloud Computing

-   On-demand self service:

    -   Users can provision resources and use them without human interaction from the service provider

-   Broad network access:

    -   Resources available over the network, and can be accessed by diverse client platforms

-   Multi-tenancy and resource pooling:

    -   Multiple customers can share the same infrastructure and applications with security and privacy
    -   Multiple customers are serviced from the same physical resources

-   Rapid elasticity and scalability:

    -   Automatically and quickly acquire and dispose resources when needed
    -   Quickly and easily scale based on demand

-   Measured service:
    -   Usage is measured, users pay correctly for what they have used

### Advantages of Cloud Computing

-   Trade capital expense (CAPEX) for operational expense (OPEX)

    -   Pay On-Demand: don't own hardware
    -   Reduced Total Cost of Ownership (TCO) & Operational Expense (OPEX)

-   Benefit from massive economies of scale

    -   Prices are reduced as AWS is more efficient due to large scale

-   Stop guessing capacity

    -   Scale based on actual measured usage

-   Increase speed and agility

-   Stop spending money running and maintaining data centers

-   Go global in minutes: leverage the AWS global infrastructure

### Problems solved by the cloud

-   Flexibility: change resource types when needed

-   Cost-Effectiveness: pay as you go, for what you use

-   Scalability: accommodate larger loads by making hardware stronger or adding additional nodes

-   Elasticity: ability to scale out and scale in when needed

-   High-availability and fault-tolerance: build across data centers

-   Agility: rapidly develop, test and launch software applications

# Type of Cloud Computing

-   Infrastructure as a Service (IaaS)

    -   Provide building blocks for cloud IT
    -   Provides networking, computers, data storage space
    -   Highest level of flexibility
    -   Easy parallel with traditional on-premises IT
    -   Example: Amazon EC2 (on AWS)

-   Platform as a Service (PaaS)

    -   Removes the need for your organization to manage the underlying infrastrcture
    -   Focus on the deployment and management of your applications
    -   Example: Elastic Beanstalk (on AWS)

-   Software as a Service (SaaS)
    -   Completed product that is run and managed by the service provider
    -   Example: Google Apps (Gmail), Dropbox, Zoom

![Type of Cloud Computing](type-of-cloud-computing.png)
