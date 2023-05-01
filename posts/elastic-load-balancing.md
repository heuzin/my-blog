---
title: Elastic Load Balancing & Auto Scaling Groups
excerpt: Automatically distribute incoming application traffic across multiple targets
image: elastic-load-balancing.png
isFeatured: true
date: '2023-06-03'
---

# Scalability & High Availability

Scalability means that an application / system can handle greater loads by adapting. It is the ability of a computer
application or product to continue to function well when it is changed in size or volume in order to meet a user need.
Typically, the rescaling is to a larger size or volume.

There are two types of scalability, vertical and horizontal scalability.

### Vertical Scalability

Vertical Scalability (or "scaling up") means increasing the size of the instance, adding more hardware to an existing
machine so that you run the same workload on better specs.

Examples of vertical scaling include:

-   Adding more RAM to a machine.
-   Upgrading a hard disk drive to an SSD with more storage.
-   Improving network speed.

![Vertical Scalability](vertical-scaling.png)

### Horizontal Scalability

Horizontal Scalability (or "scaling out") means increasing the number of instances / systems for for your application.
It refers to adding more nodes to a system's resource pool to meet the increased demand. You do not improve the
specifications of the existing machine—instead, you add more same-size servers to the cluster and share the workload
across more devices.

![Horizontal Scalability](horizontal-scaling.png)

### High Availability

High Availability is the elimination of single points of failure to enable applications to continue to operate even if
one of the IT components it depends on, such as a server, fails.

# Elastic Load Balancing (ELB)

Elastic Load Balancing automatically distributes incoming application traffic across multiple Amazon EC2 instances. It
enables you to achieve greater levels of fault tolerance in your applications, seamlessly providing the required amount
of load balancing capacity needed to distribute application traffic. Elastic Load Balancing detects unhealthy instances
and automatically reroutes traffic to healthy instances until the unhealthy instances have been restored.

![Elastic Load Balancing](load-balancer.png)

### Why use a Load Balancer

-   Spread load across multiple downstream instances
-   Expose a single point of access (DNS) to your application
-   Seamlessly handle failures of downstram instances
-   Do regular health checks to your intances
-   Provide SSL termination (HTTPS) for your websites
-   High availability across zones

### Diferent kinds of load balancers

-   Application Load Balancer (HTTP/HTTPS only) - Layer 7
-   Network Load Balancer (ultra-high performance, allows TCP) - Layer 4
-   Gateway Load Balancer - Layer 3

![Type Load Balancer](types-load-balancer.png)

# Auto Scaling Group

Amazon EC2 Auto Scaling helps you ensure that you have the correct number of Amazon EC2 instances available to handle
the load for your application. You create collections of EC2 instances, called Auto Scaling groups. You can specify the
minimum number of instances in each Auto Scaling group, and Amazon EC2 Auto Scaling ensures that your group never goes
below this size. You can specify the maximum number of instances in each Auto Scaling group, and Amazon EC2 Auto Scaling
ensures that your group never goes above this size. If you specify the desired capacity, either when you create the
group or at any time thereafter, Amazon EC2 Auto Scaling ensures that your group has this many instances. If you specify
scaling policies, then Amazon EC2 Auto Scaling can launch or terminate instances as demand on your application increases
or decreases.

![Auto Scaling Group](auto-scaling-group.png)
