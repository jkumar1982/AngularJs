AngularJS Course - Final Exercise
=================================

## In this exercise, you will have to implement yourself the features listed after the setup steps

### Setup steps
1. Clone the project from the repository.
2. Have a look at the tags issuing the command: __"git log --tags --pretty=format:'%d %s'"__.
3. Perform __'npm install'__ and __'bower install'__ and issue the command __'node backend/backend.js'__ to start the web server.
4. Perform __'npm run webdriver-update'__ followed by __'npm run unit'__ and __'npm run e2e'__.
5. Open the URL: [http://localhost:3000/](http://localhost:3000/) and play around with the application.
6. Import the project in the IDE and have a look at the code in the __'app'__ and the __'test'__ folders.
7. Checkout the first step of the exercise: __'git checkout first'__.
8. Follow the instructions and implement the features listed below.

### Features to implement
1. Create a directive to wrap the bootstrap navigation bar.
    + Create the directive within the 'core' module with the name 'ac-navigation-bar-directive.js'.
    + Add a 'template' attribute and copy there the navigation bar HTML from 'index.html'.
    + Substitute the bootstrap navigation bar in 'index.html' with the proper HTML (use the directive as an HTML tag and not as an HTML attribute).
    + Make it work.
2. Create a service to provide the navigation bar directive with the navigation links.
    + Create the service within the 'core' module with the name 'navigation-service.js'.
    + Extract the navigation links into the service.
    + Design the service in a way that works asynchronously.
    + Substitute the static links in the directive with the result of the service call.
3. Optimize the load of master data
    + Check in the browser development tools what will be loaded via AJAX when you navigate from 'Home' to 'Search'.
    + Configure the loading of the categories to happen only once per execution of the application (see '$http' service documentation).
4. Create a language bar component
    + Copy the 'ac-navigation-bar-directive.js' and the 'navigation-service.js' with the names 'ac-language-bar-directive.js' and 'i18n-service.js'.
    + Adapt the directive to render a list of links with the languages provided by the 'i18n-service.js'.
    + Adapt the service to return asynchronously a list of languages with properties 'locale' and 'label'.
    + Extend the directive to provide a 'setLanguage(locale)' method in the scope that logs the locale in the browser console.
    + Make each of the language links clickable and bind the 'setLanguage' method to the click event passing the locale as parameter.
    + Add the language bar directive to the 'index.html' page after the navigation bar.
5. Extend the navigation bar to 'transclude' its content in a new container after the list of navigation links (see 'ng-transclude' and the directive's 'transclude' attribute documentation).
6. Internationalize the application
    + Add the 'angular-translate' plugin to the project.
    + Extend the i18n service with the translated messages and a method to set the current language.
    + Make the language bar directive invoke the new method with the chosen locale.
    + Translate the 'index.html' title and the welcome tagline by using the 'translate' directive.
    + Translate the rest of the client-side messages.
7. Implement backend translations
    + Send the current client language to the server by mean of a custom HTTP header and an http interceptor.
    + Extend the backend to support the new header and translate the categories.
8. Fix the lifecycle problem with the categories cache and backend translations
    + Send an application event to inform other parts of the application.
    + Use an specific cache for the master data translations and flush the cache whenever the language changes.
    + Trigger the re-loading of the current route whenever the language changes to force re-loading the language-specific data.
9. Implement a view to update the search results
    + Extend the results list in the results table of the search form to navigate to a new application front-end endpoint (ex: '#article/<id>').
    + Create a new 'article' application module and add the navigation endpoint.
    + Implement a new form to edit the article data.
    + Add a controller and a service to load the article data and update it when required.
1. Use a promise in the article controller to load the article before the actual navigation takes place
1. Clean up the HTML boilerplate from the search and article forms
    + Create a new 'ac-control-group-directive.js' which wraps an element with a bootstrap control-group HTML structure with two columns.
    + Apply the directive to the search and article forms.
    + Extend the directive to receive a parameter with a translation-key and use its translation as label in the first column.
