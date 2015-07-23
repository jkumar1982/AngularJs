AngularJS Course - Initial Setup
================================

### Please, follow the steps below to setup the environment and tools required for this course
1. Install [Git](http://git-scm.com/).
2. Install [NodeJS](http://nodejs.org/).
3. Upgrade 'npm' by executing the command: __'npm install -g npm'__.
4. Checkout this git repository by executing the following command in a console window: __'git clone https://stash.edorasware.com/scm/ang2/0_initial-setup.git'__.
5. Change the active directory in the console window to the directory where you checked out the repository files (i.e.: '0_initial-setup').
6. Execute the command: __'npm install'__. This command should finalize without errors.
7. Execute the command: __'npm test'__. You should read in the console a message containing the text: __'Executed 2 of 2 SUCCESS'__.
8. Execute the command: __'npm run serve'__. Open the URL: [http://localhost:8080/](http://localhost:8080/) in a browser and you should see a web page with the text __'Hello AngularJS!'__ (among others).

__Note:__ if you don't have Firefox installed on your machine, it is possible to run the tests using Chrome instead by setting the property __'browsers'__ in the file __'karma.conf.js'__ to "['Chrome']" and installing the Chrome Karma launcher with the command: __'npm install karma-chrome-launcher --save-dev'__. After having done this, re-run the command: __'npm test'__ and now the tests should run within Chrome.
