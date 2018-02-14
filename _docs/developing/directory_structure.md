# Directory Structure

The top level directory structure contains deployment-related configuration, as well as the top-level directories for the client application and the API application.

``` javascript
Capfile // Deployment related
Gemfile // Minimal top-level gem dependencies (mostly for Capistrano and linting)
Gemfile.lock // Top-level Gem lockfile
LICENSE.md 
README.md
api // Directory containing the API Rails application
bin // Capistrano binstubs
client // Directory containing the Client-side Javascript application
config // Deployment configuration
lib // Capistrano custom tasks
manifold.iml // Intellij/Jetbrains editor file
texts // Directory containing open source EPUBs for testing
user_texts // Directory for EPUBs to import during development
```