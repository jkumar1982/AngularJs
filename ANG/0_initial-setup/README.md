AngularJS Course - Initial Setup
================================

### Please, follow the steps below to setup the environment and tools required for the realization of this AngularJS Course
1. Install [Git](http://git-scm.com/).
2. Install [NodeJS](http://nodejs.org/).
3. Install [Bower](http://bower.io/) by executing the following command in a console window: __'npm install -g bower'__. If the execution of the previous command fails with a permission error message("code: 'EACCESS'"), try using __'sudo npm install -g bower'__ and enter your password when required.
4. Checkout this git repository by executing the following command in a console window: 'git clone https://stash.edorasware.com/scm/ang/0_initial-setup.git'.
5. Change the active directory in the console window to the directory where you checked out the repository files.
6. Execute the command: __'npm install'__.
7. Execute the command: __'bower install'__.
8. Execute the command: __'npm run test'__.

All the steps described above should finalize successfully and after the execution of the last step, you should read in the console a message containing the text: __'Executed 2 of 2 SUCCESS'__.

__Note:__ if you don't have Firefox installed on your machine, it is possible to use Chrome instead by setting the property __'browsers'__ in the file __'karma.conf.js'__ to "['Chrome']" and installing the Chrome Karma launcher with the command: __'npm install karma-chrome-launcher --save-dev'__. After having done this, re-run the command: __'npm run test'__ and now the tests should run within Chrome.
