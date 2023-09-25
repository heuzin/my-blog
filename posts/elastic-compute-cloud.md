---
title: EC2 - Elastic Compute Cloud
excerpt: Secure and Resizable Cloud Compute
image: elastic-compute-cloud.png
isFeatured: true
date: '2023-05-02'
---

Amazon EC2 is one of the most used and most basic services on AWS that lets users launch and manage server instances, at
any time and for as long as they need, with over 500 instances and choice of the latest processor, storage, networking,
operating system, and purchase model to help you best match the needs of your workload.

Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.

# EC2 Mainly Capibilities

-   Renting Virtual Machines (EC2)
-   Storing data on virtual drives (EBS)
-   Distributing load across machines (ELB)
-   Scaling the services using an auto-scaling group (ASG)

# EC2 User Data

It is possible to bootstrap our instances using an **EC2 User Data** script, meaning we can launch commands when the
instance first starts. These commands are used to automate boot tasks such as installing updates, installing softwares,
downloading common files from the internet and doing anything you can think of.

# EC2 Instance Types

### General Purpose

-   Great for a diversity of workloads such as web servers or code repositories
-   Balance between compute, memory and networking

### Compute Optimized

-   Great for compute-intensive tasks that require high performance processors:
    -   Batch processing workloads
    -   Media Transcoding
    -   High performance web servers
    -   High performance computing (HPC)
    -   Scientific modeling & machine learning
    -   Dedicated gaming servers

### Memory Optmized

-   Fast performance for workloads that process large data sets in memory
-   Use cases:
    -   High performance, relational/non-relational databases
    -   Distributed web scale cache stores
    -   In-memory databases optimized for BI (business intelligence)
    -   Applications performing real-time processing of big unstructured data

### Storage Optimized

-   Great for storage-intensive tasks that require high, sequential read and write acces to large data sets on local
    storage
-   Use cases:
    -   High frequency online transaction processing (OLTP) systems
    -   Relational & NoSQL databases
    -   Cache for in-memory databases (for example Redis)
    -   Data warehousing applications
    -   Distributed files systems

# Security Groups

**Security Groups** are the fundamental of network security in AWS. They control how traffic is allowed into or out of
EC2 Instaces. Security Groups only contains **_allow_** rules and they can reference by IP or by security group

Security Groups acts like a **_firewall_** on EC2 instances, they regulate access to Ports, IP ranges and control
inbound and outbound network.

They can be attached to multiple instances at the same time, but they are locked down to a region / VPC combination.
They live outside the EC2 instance, if traffic is blocked the EC2 instance won't see it. All inbound traffic is blocked
by default and all outbound traffic is authorised by default.

![Security Groups](security-groups.png)

# EC2 Instace Roles

EC2 Instance Role provides the Instance access to a set of IAM Credentials and – if the associated IAM Policies permit –
access to AWS services.

# Summary

-   **EC2 Instance:** AMI (OS) + Instance Size (CPU + RAM) + Storage + Security Groups + EC2 User Data
-   **Security Groups:** Firewall attatched to the EC2 instance
-   **EC2 User Data:** Script launched at the first start of an instance
-   **EC2 Instance Rolse:** Instance access to a set of IAM Credentials and AWS services
-   **Purchasing Options:** On-Demand, Spot, Reserved (Standard + Convertible + Scheduled), Dedicated Host, Dedicated
    Instance
