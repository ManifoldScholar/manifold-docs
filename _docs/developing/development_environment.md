# Setting up your Manifold Development Environment

## Warning

Manifold is still in beta, and the installation story is evolving. These instructions are intended for people who want to experiment with Manifold, not for hosting Manifold in a production environment. In a production environment, Manifold services should be managed with an init system like systemd, and there should be a webserver \(preferably Nginx\) in front of the services. This is how we run Manifold in production for UMNP, and we'll be sharing our strategies for production hosting in the future. These instructions are for running Manifold in development mode, which is fine for working on the application, but too inefficient for a production environment.

### Assumptions and Notes

* The Manifold development team works on MacOS, and the instructions here could be pretty easily adapted for MacOS using homebrew instead of apt-get.
* The instructions have been tested on a Ubuntu 16.04.2 x64 Digital Ocean droplet
* All commands run as `manifold` user, and that user has full sudo access.
* Elasticsearch will complain with less than 4GB RAM. Manifold will want at least 2GB of 
  ram for compiling assets. More is better.

## Installation Process

#### 1. Create a Manifold user

We'll make a Manifold user and grant it sudo privileges.

    adduser manifold
    usermod -aG sudo manifold
    
Either shell in as that user or, if you're already logged in as root, switch to it:

    su - manifold

#### 1. Install dependencies

Most dependencies can be installed with Ubuntu packages.

	sudo apt-get update 
	sudo apt-get install build-essential libssl-dev libreadline-dev \
	zlib1g-dev git postgresql postgresql-contrib postgresql-server-dev-9.5 \
	redis-server 

Elasticsearch takes a little bit more work. First, install Java.

	cd ~
	sudo apt-get install default-jre

Then install Elasticsearch

	wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
	echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-5.x.list
	sudo apt-get update && sudo apt-get install elasticsearch

Start Elasticsearch on boot, and right now

	sudo /bin/systemctl daemon-reload
	sudo /bin/systemctl enable elasticsearch.service
	sudo systemctl start elasticsearch.service

#### 2. Setup Postgres; create a "manifold" user

The name of the user postgres user should match the name of the OS user. When prompted  whether the postgres user should be a super user, say yes. Be sure to save the password that you assign to the user.

	sudo -u postgres createuser --interactive
	sudo -u postgres psql
	\password manifold
	\q

#### 3. Add ./bin to your user's $PATH

There are a few executable files in Manifold's `bin` directory that make the setup process easier. Adding `./bin` to your OS user's path simplifies the following commands.

	echo 'export PATH="./bin:$PATH"' >> ~/.bash_profile


#### 4. Install rbenv and ruby-build

We tend to use rbenv to manage rubies. If you have a different approach, that's fine, so long as the user running Manifold has access to Ruby 2.3.x

	git clone https://github.com/rbenv/rbenv.git ~/.rbenv
	cd ~/.rbenv && src/configure && make -C src
	echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
	echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
	git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
	source ~/.bash_profile

#### 5. Install nodenv and node-build

As with Ruby, this is how we manage our node versions, but other approaches should work as well.

	git clone https://github.com/nodenv/nodenv.git ~/.nodenv
	cd ~/.nodenv && src/configure && make -C src
	echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bash_profile
	echo 'eval "$(nodenv init -)"' >> ~/.bash_profile
	git clone https://github.com/nodenv/node-build.git $(nodenv root)/plugins/node-build
	source ~/.bash_profile

#### 6. Clone the Manifold repository

	cd ~
	git clone https://github.com/ManifoldScholar/manifold.git

#### 7. Install Node and Ruby

Skip this step if you're using another approach for managing Ruby and Node. Consider grabbing a coffee while Ruby is installed, because it's going to be a while.

	cd ~/manifold
	nodenv install
	rbenv install
	gem install bundler

#### 8. Install Yarn

In theory, you could use NPM for installing Manifold's dependencies. We prefer Yarn because we've found it to be more reliable and less conflict prone than NPM.

	curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
	echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
	sudo apt-get update && sudo apt-get install yarn

#### 9. Setup Manifold dotenv file

Manifold stores much of its configuration in the `.env` file in the root. Start off by copying the sample file over and adjusting it.

	cd ~/manifold
	cp .env.sample .env

#### 10. Install API gem bundle

We install our gems first so we can run `rails secret` \(see step 11, below\) without error!

	cd ~/manifold/api
	bundle install

#### 11. Set secret, DB credentials and service URLs in `~/manifold/.env`

The API\_URL, and the CABLE\_URL variables are used by the client application to  determine where to send websocket and API requests, so these should be set to the FQDN or public IP address of your host. If you're running this on a local machine, they  
could be set to 127.0.0.1. For the purposes of these instructions, we're assuming that you're running each service on a separate port. In production, we tend to run them on Unix sockerts and proxy requests with nginx.

The CLIENT\_URL is used by the client in a number of cases, including when it generates links back to itself, such as in the case of a social share. This should be the public address of your Manifold installation.

Each installation needs a secure, secret key. This can be generated with `cd ~/manifold/api && rails secret`

Set the following environment variables in `~/manifold/.env`

	RAILS_DB_PASS=some-password
	RAILS_DB_USER=manifold
	RAILS_DB_NAME=manifold
	RAILS_SECRET_KEY=a-long-secure-key-generated-by-rails
	CLIENT_URL=http://your.public.ip:3010
	API_URL=http://your.public.ip:3013
	CABLE_URL=ws://your.public.ip:3014

#### 12. Setup the API database

	cd ~/manifold/api
	rails db:create
	rails db:reset

#### 13. Install Client dependencies

As above, if you're using NPM, run `npm install` instead.

	cd ~/manifold/client
	yarn install

#### 14. Install Manifold CLI and deployment dependencies

	cd ~/manifold
	bundle install

#### 15. Make an admin user

Replace "email" and "password" with your email and your password

	./bin/manifold create admin email password

#### 16. Start Manifold services

This will take a while, especially the first time you run Manifold. We're still working on optimizing the startup time!

	cd ~/manifold
	./bin/manifold start

#### 17. Pat yourself on the back

With luck, the servers all start up successfully, and you're able to see a website running on your IP or FQDN on port 3010. For example, if your IP address is `10.0.1.1`, you should expect to see the site at `http://10.0.1.1:3010`.

Did something go wrong? If so, open an issue on the [Manifold repository][1] and we'll get you sorted out as best we can. If you have an correction or improvement to these instructions that you'd like to contribute, please open a pull request for on the [documentation repository][2].

[1]:	https://github.com/ManifoldScholar/manifold/issues
[2]:	https://github.com/ManifoldScholar/manifold-docs