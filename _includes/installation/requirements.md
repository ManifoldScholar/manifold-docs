## Installation Prerequisites

1. Manifold should be installed on a virtual or physical server with at least 1 CPU and 6 GB of RAM (8GB preferred).<sup>[1](#note-1)</sup> We've had good luck installing Manifold on [Google Cloud Compute instances](https://cloud.google.com/compute/docs/instances/), [AWS EC2 instances](https://aws.amazon.com/ec2/instance-types/), and [Digital Ocean droplets](https://www.digitalocean.com/).

2. You will need to have root access to the server and the ability to shell into the server.

3. Your server should have a fully qualified domain name (FQDN). If the hostname is setup correctly, the installer should detect it and configure manifold accordingly. If it's not, you can set the hostname manually in `/etc/manifold/manifold.rb` and reconfigure the application. Reconfiguration is discussed below.
