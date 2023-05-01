---
title: Amazon S3
excerpt: Object storage built to retrieve any amount of data from anywhere
image: amazon-s3.png
isFeatured: true
date: '2023-07-07'
---

Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data
availability, security, and performance.

# Introduction

Amazon S3 is one of the main building blocks of AWS, it's advertised as "infinitely scaling" storage. Many websites and
AWS services uses Amazon S3. It offers a range of storage classes designed for different use cases.

Amazon S3 Use Cases:

-   Backup and storage
-   Disaster Recovery
-   Archive
-   Hybrid Cloud Storage
-   Media Hosting
-   Data Lakes & Big data analytics
-   Software Delivery
-   Static Website

## Objects and Buckets

Amazon S3 is an object storage service that stores data as objects within buckets. An object is a file and any metadata
that describes the file. A bucket is a container for objects. Buckets must have a gloablly unique name (across all
regions and all accounts) and Buckets are defined at the region level.

# S3 Security: Bucket Policy

Amazon S3 provides features for auditing and managing access to your buckets and objects. By default, S3 buckets and the
objects in them are private. You have access only to the S3 resources that you create. To grant resource permissions you
can use the following features.

-   **S3 Block Public Access:** Block public access to S3 buckets and objects. By default, Block Public Access settings
    are turned on at the bucket level.
-   **AWS Identity and Access Management (IAM):** API calls that should be allowed for a specific user from IAM
-   **Bucket Policies:** JSON based policies. Configure resource-based permissions for your S3 buckets and the objects
    in them.

# Versioning

You can use S3 Versioning to keep multiple variants of an object in the same bucket. With S3 Versioning, you can
preserve, retrieve, and restore every version of every object stored in your buckets. You can easily recover from both
unintended user actions and application failures.

# Replication (CCR & SRR)

With Amazon S3 you can replicate obects within the same or into other AWS Regions for reduced latency, compliance,
security, disaster recovery, and other use cases wit **Cross-Region Replication** and **Same-Region Replication**. In
order for this to work, you **must enable Versioning** in source and destination buckets.

### Use Cases

-   **SSR:**
    -   Log aggregation
    -   Live replication between production and test accounts
-   **CCR:**
    -   Compliance
    -   Latency performance
    -   Regional efficiency

# Storage Classes

-   S3 Standard - General Purpose
    -   99.99% Availability
    -   Used for frequently accessed data
    -   Low latency and high thoughput
    -   Sustain 2 concurrent facility failures
    -   Use cases: Big Data analytics, mobile & gaming applications, content distribution
-   S3 Storage Classes - Infrequent Access
    -   For data that is less frequently accessed, but requires rapid access when needed
    -   Lower cost than S3 Standard
    1.  **Amazon S3 Standard-Infrequent Access (S3 Standard-IA)**
        -   99.9% Availability
        -   Use cases: Disaster Recovery, backups
    2.  **Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)**
        -   High Durability (99.999999999%) in an single AZ; data lost when AZ is destroyed
        -   99.5% Availability
        -   Use Cases: Storing secondary backup copies of on-premise data, or data you can recreate
-   S3 Glacier Storage Classes
    -   Low-cost object storage meant for achiving / backup
    -   Pricing: price for storage and object retrieval cost
    1.  Amazon S3 Glacier Instant Retrieval
        -   Millisecond retrieval, great for data accessed once a quarter
        -   Minimun storage duration of 90 days
    2.  Amazon S3 Glacier Flexible Retrieval
        -   Expedited (1 to 5 minutes), Standard (3 to 5 hours), Builk (5 to 12 hours)
        -   Minimum storage duration of 90 days
    3.  Amazon S3 Glacier Deep Archive
        -   For long term storage
        -   Standard (12 hours), Bulk (48 hours)
        -   Minimun storage duration of 180 days
-   S3 Inteligent-Tiering
    -   Small monthly monitoring and auto-tiering fee
    -   Moves objects automatically between Access Tiers based on usage
    -   There are no retrieval charges in S3 Inteligent-Tiering
    -   Frequent Access tier (automatic): default tier
    -   Infrequent Access tier (automatic): objects not accessed for 30 days
    -   Archive Instant Access tier (automatic): objects not accessed for 90 days
    -   Archive Access tier (optional): configurable from 90 days to 700+ days
    -   Deep Archive Access tier (optional): configurable from 180 days to 700+ days

# Encryption

![Amazon S3 Encryption](s3-encryption.png)

# AWS Snow Family

Highly-secure, portable devices to collect and process data at the edge, and migrate data into and out of AWS

-   Snowball Edge
    -   Physical data transport solution: move TBs or PBs of data in or out of AWS
    -   Alternatve to moving data over the nerwork
    -   Pay per data transfer job
    -   Provide block storage and Amazon S3-compatible object storage
    -   Snowball Edge Storage Optimized
    -   Snowball Edge Compute Optimized
    -   Use cases: large data cloud migrations, DC decommision, disaster recovery
-   Snowcone & Snowcone SSD
    -   Small, portable computing, anywhere, rugged & secure, withstands harsh environments
    -   Light (4.5 pounds)
    -   Device used for edge computing, storage, and data transfer
    -   Use Snowcone where Snowball does not fit
    -   Must provide own battery / cables
    -   Can be sent back to AWS offile, or connect it to internet and use AWS DataSync to send data
-   Snowmobile
    -   Transfer exabytes of data
    -   Each Snowmobile has 100 PB of capacity (use multiple in parallel)
    -   High security: temperature controlled, GPS, 24/7 video surveillance
    -   Better than Snowball if you transfer more than 10PB

# AWS OpsHub

Use AWS OpsHub to perform tasks such as unlocking and configuring single or clustered devices, transferring files, and
launching and managing instances running on Snow Family devices. You can use AWS OpsHub to manage both the Storage
Optimized and Compute Optimized Snow device types.

AWS OpsHub takes all the existing operations available in the Snowball API and presents them as a graphical user
interface. This interface helps you quickly migrate data to the AWS Cloud and deploy edge computing applications on Snow
Family devices.

AWS OpsHub provides a unified view of the AWS services that are running on Snow Family devices and automates operational
tasks through AWS Systems Manager. With AWS OpsHub, users with different levels of technical expertise can manage a
large number of Snow Family devices.

# AWS Storage Gateway

![Amazon S3 Encryption](aws-storage.png)

AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud
storage. You can use Storage Gateway to simplify storage management and reduce costs for key hybrid cloud storage use
cases. These include moving backups to the cloud, using on-premises file shares backed by cloud storage, and providing
low-latency access to data in AWS for on-premises applications.

![Amazon S3 Encryption](aws-storage-gateway.png)
