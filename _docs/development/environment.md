---
layout: page
title: Development Environment
menu:
  development:
    title: "Development Environment"
---

Your first step toward contributing to Manifold should be to setup a development environment. Manifold requires a number of services for it to run correctly, so getting setup will require a little bit of work.

<div class="notice">
<strong>Note:</strong> The following steps were followed on a fresh VM running MacOS 10.14 (Mojave). Your mileage may vary on other operating systems.
</div>

## Step 1: Install dependencies

### Install Homebrew and XCode command line tools

[Homebrew](https://brew.sh/) is by far the easiest way to get the underlying dependencies in place for Manifold. Follow the instructions on the [Homebrew Website](https://brew.sh/) to install Homebrew. As of late 2018, the command to install Homebrew is:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Update your PATH variable

Manifold relies on a number of binstubs. To simplify development, ensure that ./bin and ./node_modules/.bin are both in your $PATH.

```
touch ~/.bash_profile
echo 'export PATH=./bin:$PATH' >> ~/.bash_profile
echo 'export PATH=./node_modules/.bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
```

### Install rbenv and Ruby

Rbenv is a tool for managing the available Ruby versions on your computer. If you prefer .rvm or another mechanism for managing ruby versions, by all means use it, as long as you can get the correct version of Ruby installed.

As of November 2018, Manifold runs on Ruby 2.3.5. The version changes relatively frequently, as new versions of Ruby are released. We store the current [required ruby version](https://github.com/ManifoldScholar/manifold/blob/master/.ruby-version) in a `.ruby-version` file in the project root. Manifold should work with version 2.3 or higher.

First, install rbenv.

```
brew install rbenv
```

Second, adjust your [.bash_profile file](https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html) so that rbenv is initialized when you open a new terminal session. If you don't use Bash, consult [rbenv's documentation](https://github.com/rbenv/rbenv#basic-github-checkout).

```
touch ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
source ~/.bash_profile
```

Third, install Ruby.

```
rbenv install 2.3.5
```


### Install nodenv, Node, and yarn

We prefer nodenv for running different versions of Node. If you have a preferred means of installing node, go for it.

As of November 2018, Manifold runs on Node 8.11.2. The version changes relatively frequently, as new versions of Node are released. We store the current [required node version](https://github.com/ManifoldScholar/manifold/blob/master/.node-version) in a `.node-version` file in the project root.

The Manifold development team uses [Yarn](https://yarnpkg.com) rather than [NPM](https://www.npmjs.com/) to manage javascript dependencies.

First, install nodenv.

```
brew install nodenv
```

Second, adjust your [.bash_profile file](https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html) so that nodenv is initialized when you open a new terminal session. If you don't use Bash, consult [nodenv's documentation](https://github.com/nodenv/nodenv#basic-github-checkout).

```
touch ~/.bash_profile
echo 'eval "$(nodenv init -)"' >> ~/.bash_profile
source ~/.bash_profile
```

Third, install Node.

```
nodenv install 8.11.2
```

Fourth, install Yarn.

```
brew install yarn --without-node
```


### Install Postgres

Manifold stores most data in a PotsgreSQL database.

As of November 2018, our Manifold packages include Postgres 9.6.9. This version changes periodically. The current minimum version is recorded in our [Omnibus packaging repository](https://github.com/ManifoldScholar/omnibus-manifold/blob/master/config/software/postgresql.rb#L18).

First, install PostgreSQL.

```
brew install postgres
```

Second, use [Homebrew Services](https://github.com/Homebrew/homebrew-services) to run PostgreSQL in the background.s

```
brew services start postgresql
```

### Install Redis

[Redis](https://redis.io/) is an open source (BSD licensed), in-memory data structure store, used primarily by Manifold as a cache and message broker. Manifold is compatible with Redis v3 and v4. It is likely compatibile with v5, as well, although we have not formally tested it against v5.

Fist, install Redis.

```
brew install redis
```

Second, use [Homebrew Services](https://github.com/Homebrew/homebrew-services) to run Redis in the background.

```
brew services start redis
```

### Ensure Java is present

Java is needed for ElasticSearch. We'll use [Homebrew Cask](https://github.com/Homebrew/homebrew-cask) to install it. You will likely be prompted for your password.

```
brew tap caskroom/versions
brew cask install java8
```

### Install additional libraries

Manifold uses Imagemagick (or Graphicsmagick) for resizing images. It uses Pandoc for Word document ingestion.

```
brew install imagemagick pandoc
```


## Step 2: Clone Manifold source

At [Cast Iron](https://castironcoding.com), we typically store our projects in a ~/src directory. For the purposes of these instructions, we'll assume you're doing the same.

First, make a directory at `/Users/yourUserName/src` and enter it.

```
mkdir -p ~/src
cd ~/src
```

Second, clone the [Manifold source code](https://github.com/manifoldScholar/manifold) with git and enter the source directory.

```
git clone https://github.com/ManifoldScholar/manifold.git
cd ~/src/manifold
```

## Step 3: Install API dependencies and setup the database.

Next, install Bundler and Manifold's gem dependencies. There is a Gemfile in the root of the repository, which includes dependencies related to Manifold's tooling. There is also a Gemfile in the `api` directory, which is the root of the Rails application that is Manifold's API backend. You'll need to install both sets of gems.

```
gem install bundler
bundle install
cd ~/src/manifold/api
bundle install
```

The API is a Rails application, and you'll use standard Rails commands to manage the database. The following commands create the database, loads the schema, and add seed data.

```
cd ~/src/manifold/api
rails db:create
rails db:schema:load
rails db:seed
```

While you're at it, go ahead and create an admin user. Be sure to replace the values in the command below with your email, password, first name, and last name.

```
rails manifold:user:create:admin["email@email.com","password","FirstName","LastName"]
```

## Step 4: Install client dependencies

Now it's time to install Manifold's javascript dependencies. There is a package.json file in the `client` directory, which contains Manifold's client application.

```
cd ~/src/manifold/client
yarn install
```

## Step 5: Install ElasticSearch

Manifold includes a command line tool that helps with some development tasks at `bin/manifold`. You can use this tool to install ElasticSearch in the top level `services` folder. As of November 2018, Manifold uses ElasticSearch version 5.6.5.

```
cd ~/src/manifold
manifold install elasticsearch
```

## Step 6: Setup .env file.

Generate a secret key and store it. You'll add it to the environment file below, where it says "ENTER_YOUR_SECRET_KEY"

```
cd ~/src/manifold/api
rails secret
```

Copy that key to your clipboard. Create a file at `~/src/manifold/.env` with the following contents:

```
DOMAIN=127.0.0.1
CABLE_URL="ws://127.0.0.1:3014/cable"
API_URL="http://127.0.0.1:3013"

#################################################
# API Environment
#################################################
RACK_ENV=development
RAILS_ENV=development
RAILS_SERVE_STATIC_FILES=true
RAILS_SECRET_KEY=ENTER_YOUR_SECRET_KEY
ELASTICSEARCH_URL=http://127.0.0.1:29200

#################################################
# Client Environment
#################################################
NODE_PATH=./src
NODE_ENV=development

#################################################
# Services
#################################################
CLIENT_SERVER_PORT=3010
CLIENT_SERVER_FALLBACK_PORT=3011
CLIENT_ASSET_PORT=3012
API_PORT=3013
API_BIND_IP=0.0.0.0
CABLE_PORT=3014
CABLE_BIND_IP=0.0.0.0
```

## Step 7: Start Manifold

The first time you start Manifold, it will be a little bit slower than usual. Start all services with the `manifold start` command.

```
cd ~/src/manifold
manifold start
```

## Step 8: Open Manifold in your browser

Open a web browser and go to [http://127.0.0.1:3011](http://127.0.0.1:3011). If all went according to plan, you can now interact with the instance of Manifold running locally. You should now be able to login to the backend with the user you setup in the previous step.

## You did it!

You should now have a functioning Manifold development environment. We use Webpack for the client application, and chaning most files in the client directory will cause assets to be rebuild. We also have hot module reloading in place for the client application, so any changes you make to a component will cause the component to be re-rendered in your browser.

Check back soon for our contribution guidelines. In the meantime, if you'd like to contribute code to Manifold, please do so in the form of a pull request to the upstream repository.
