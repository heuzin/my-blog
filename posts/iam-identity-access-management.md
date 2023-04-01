---
title: IAM - Identity and Access Management
excerpt: Understanding the Importance of IAM
image: iam-identity-access-management.png
isFeatured: true
date: '2023-03-31'
---

With AWS Identity and Access Management (IAM), you can specify who or what can access services and resources in AWS,
centrally manage fine-grained permissions, and analyze access to refine permissions across AWS.

### What are IAM Users?

This is any identity (humans or an application) that requires long term access to AWS resources. These entities make
requests to IAM to get authenticated before any interaction with AWS resources is allowed to happen.

### IAM Groups

IAM users can be placed in an IAM groups. IAM groups makes it easier to organize a large number of users and apply
permissions on a group level instead of an individual level. Groups can only contain users, but not other groups. Users
don't have to belong to a group, and a user can belong to multiple groups.

![IAM Groups](iam-groups.png)

### IAM: Permissions

**Users or Groups** can be assigned JSON documents called policies. These policies define the **permissions** of the
users.

You can think of these policies as how AWS authenticates a user or group to ensure that they are only allowed to access
and control permissions that were granted to them.

In AWS you apply the **least privilege principle**, which means you don't give more permissions than a user needs.

![IAM Permissions](iam-permissions.png)

### IAM: Password Policy

-   Strong passwords - higher security for your account
-   In AWS, you can setup a password policy:
    -   Set a minimun password length
    -   Require specific character types:
        -   Uppercase letters
        -   Lowercase letters
        -   Numbers
        -   Non-alphanumeric characters
    -   Allow all IAM users to change their own passwords
    -   Require users to change their password after some time (password expiration)
    -   Prevent password re-use
-   Multi Factor Authentication - MFA
    -   User is granted access only after successfully presenting two or more pieces of evidence to an authentication
        mechanism
    -   If a password is stolen or hacket, the account is not compromised

### IAM Roles for Services

Some AWS service will need to aperform actions on your behaulf. To do so, we will assign **permissions** to AWS services
with **IAM Roles**

An IAM role is similar to an IAM user, in that it is an AWS identity with permission policies that determine what the
identity can and cannot do in AWS. However, instead of being uniquely associated with one person, a role is intended to
be assumable by anyone who needs it.

-   Common roles:
    -   EC2 Instace Roles
    -   Lambda Function Roles
    -   Roles for CloudFormation

![IAM Roles](iam-roles.png)

### IAM Security Tools

-   IAM Credentials Report (account-level)
    -   A report that lists all your account's users and the status of their various credentials
-   IAM Access Advisor (user-level)
    -   Access advisor shows the service permissions granted to a user and when those services were last accessed
    -   You can use this information to revise your policies

### IAM Guidelines & Best Practices

-   Don't use the root account except for AWS account setup
-   One physical user = One AWS user
-   **Assign users to groups** and assign permissions to groups
-   Create a **strong password policy**
-   Use and enforce the use of **Multi Factor Authentication (MFA)**
-   Create and use **Roles** for giving permissions to AWS services
-   Use Access Keys for Programmatic Access (CLI / SDK)
-   Audit permissions of your account with the IAM Credentials Report
-   **Never share IAM users & Access Keys**
