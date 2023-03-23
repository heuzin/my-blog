---
title: EC2 Instance Storage
excerpt: Storage Options on AWS
image: ec2-instance-storage.png
isFeatured: true
date: '2023-05-21'
---

# EBS - Elastic Block Store

An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances. After you attach a
volume to an instance, you can use it as you would use a physical hard drive. EBS volumes are flexible. For
current-generation volumes attached to current-generation instance types, you can dynamically increase size, modify the
provisioned IOPS capacity, and change volume type on live production volumes.

You can use EBS volumes as primary storage for data that requires frequent updates, such as the system drive for an
instance or storage for a database application. You can also use them for throughput-intensive applications that perform
continuous disk scans. EBS volumes persist independently from the running life of an EC2 instance.

You can attach multiple EBS volumes to a single instance. The volume and instance must be in the same Availability Zone.
Depending on the volume and instance types, you can use Multi-Attach to mount a volume to multiple instances at the same
time.

![Elastic Block Store](ebs-volume.png)

### EBS Snapshots

Amazon EBS provides the ability to create snapshots (backups) of any EBS volume and write a copy of the data in the
volume to Amazon S3, where it is stored redundantly in multiple Availability Zones. The volume does not need to be
attached to a running instance in order to take a snapshot. As you continue to write data to a volume, you can
periodically create a snapshot of the volume to use as a baseline for new volumes. These snapshots can be used to create
multiple new EBS volumes or move volumes across Availability Zones. Snapshots of encrypted EBS volumes are automatically
encrypted.

When you create a new volume from a snapshot, it's an exact copy of the original volume at the time the snapshot was
taken. EBS volumes that are created from encrypted snapshots are automatically encrypted. By optionally specifying a
different Availability Zone, you can use this functionality to create a duplicate volume in that zone. The snapshots can
be shared with specific AWS accounts or made public. When you create snapshots, you incur charges in Amazon S3 based on
the volume's total size. For a successive snapshot of the volume, you are only charged for any additional data beyond
the volume's original size.

Snapshots are incremental backups, meaning that only the blocks on the volume that have changed after your most recent
snapshot are saved. If you have a volume with 100 GiB of data, but only 5 GiB of data have changed since your last
snapshot, only the 5 GiB of modified data is written to Amazon S3. Even though snapshots are saved incrementally, the
snapshot deletion process is designed so that you need to retain only the most recent snapshot.

![EBS Snapshot](ebs-snapshot.png)

# EC2 Instace Store

EBS volumes are network drives with good but limited performance, if you need a high-performance hardware disk, use EC2
Instance Store.

An instance store provides temporary block-level storage for your instance. This storage is located on disks that are
physically attached to the host computer. Instance store is ideal for temporary storage of information that changes
frequently, such as buffers, caches, scratch data, and other temporary content. It can also be used to store temporary
data that you replicate across a fleet of instances, such as a load-balanced pool of web servers.

An instance store consists of one or more instance store volumes exposed as block devices. The size of an instance store
as well as the number of devices available varies by instance type.

![EC2 Instace Store](ec2-instance-store.png)

# EFS - Elastic File System

Amazon EFS provides scalable file storage for use with Amazon EC2. You can use an EFS file system as a common data
source for workloads and applications running on multiple instances.

With Amazon EFS, storage capacity is elastic. It grows and shrinks automatically as you add and remove files. Your
applications can have the storage they need and when they need it.

![EFS](efs.png)

# FSx

Amazon FSx makes it easy and cost effective to launch, run, and scale feature-rich, high-performance file systems in the
cloud. It supports a wide range of workloads with its reliability, security, scalability, and broad set of capabilities.
Amazon FSx is built on the latest AWS compute, networking, and disk technologies to provide high performance and lower
TCO. And as a fully managed service, it handles hardware provisioning, patching, and backups -- freeing you up to focus
on your applications, your end users, and your business.

You can choose between four widely-used file systems: NetApp ONTAP, OpenZFS, Windows File Server, and Lustre.

# AMI - Amazon Machine Images

An Amazon Machine Image (AMI) is a supported and maintained image provided by AWS that provides the information required
to launch an instance. You must specify an AMI when you launch an instance. You can launch multiple instances from a
single AMI when you require multiple instances with the same configuration. You can use different AMIs to launch
instances when you require instances with different configurations.

An AMI includes the following:

-   One or more Amazon Elastic Block Store (Amazon EBS) snapshots, or, for instance-store-backed AMIs, a template for
    the root volume of the instance (for example, an operating system, an application server, and applications).
-   Launch permissions that control which AWS accounts can use the AMI to launch instances.
-   A block device mapping that specifies the volumes to attach to the instance when it's launched.

You can launch an instance from an existing AMI, customize the instance (for example, install software on the instance),
and then save this updated configuration as a custom AMI. Instances launched from this new custom AMI include the
customizations that you made when you created the AMI.
