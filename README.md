# ea

This is an initial prototype page of the EA Games search page that employs a responsive design and an angular single-paged application design.

http://www.ea.com/games

## Browsing the code

Here's a overview of the directories in this application:

scripts/ 

Contains a ruby script I wrote to transform the games page data into a json blob.  You can take a look at the usage notes to see how its run and what options are available.  It sends the transformation to standard out.

app/

Contains the base application code.  This is where all my source code is.  It is split up into several directories

app/images/

Contains a rip of the Peggle Blast images for testing purposes

app/scripts/

This is where all the javascript resides.  This is a modular angular application.  Two files in this are generated during the build process json.js and templates.js, other than that the rest is what drives the single page application.

app/styles/

This is where the SASS/SCSS/CSS files reside.  The primary one is main.scss which uses sass imports to grab the rest of the stylings.

app/templates/

This is where the angular directive templates reside.

app/views

This is where the angular controller views reside.

data/

This is where the original data source rip resides.

dist/

This is where you can run your code from.


## See it on your computer.

If I've sent you a zip file, I've provided the built application inside the zip file.
All you have to do is open dist/index.html in a browser of your choice.  I've packaged up the data so that it can run 
as a local application.  Please note that this is just a sample application that applies a bit better responsive design
than the current site.  I have not done much work on the header or footer elements, they are primarily there just so
you can orient yourself a bit better.

### Things to try
* Resizing your browser window from extremely large to extremely small.  You will see the layout adjust accordingly.
* Use the developer tools on Chrome to see how the application would look on different devices.
* Using the filters.  As you use them, you will notice the available games adjust accordingly. Note, the platform and genre fields were generated randomly, so if you select a Horror game filter...you will probably get things that are not Horror games.
* Hover over a game.  I used css transitions to effect the animation you see on the games page.

## Build & development

To build this out you will need to install npm.  You can then run

npm install
bower install

to get the rest of the application dependencies set up.

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
