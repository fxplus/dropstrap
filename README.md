#Dropstrap

Drupal theme - subtheme of [Bootstrap](https://www.drupal.org/project/bootstrap).

* Uses [Bootswatch](http://bootswatch.com/) model to override variables etc
* Modified to use sass instead of less, with grunt and compass using [recommendations by Deeson](https://www.deeson.co.uk/labs/using-grunt-bootstrap-compass-and-sass-drupal-sub-theme
):

*Forked from https://github.com/tombola/strapping*


##Instructions for use

To use the theme as it is, install it and enable it as a normal drupal theme.

##Instructions for maintenance/alteration

This theme is built to use some compiled CSS and allow for some other maintenance easing activities using Grunt to run Compass/SASS to compile the CSS and grunt (and do some other things like script minification).

If you are **not** already using Runt, SASS or compass get yourself [setup](#environment)

Otherwise, just go to theme root and

    sudo npm install

to install the grunt plugins, then

    grunt watch

Now go ahead and fiddle with the `sass/style.scss` and `sass/fx_brand/colours.scss` to your heart's content (Style Guide to follow).

- - -

<a name="environment"></a>

###Preparing for theme development

*Instructions shamelessly [stolen](https://www.deeson.co.uk/labs/using-grunt-bootstrap-compass-and-sass-drupal-sub-theme). Mac/Linux use assumed for sanity.*

To use Grunt you will need **node.js** and **ruby** installed on your system. Open up terminal, and type:

    node -v
    ruby -v

If you don't see a version number, head to the links below to download and install them.

Don’t have node? [Download it here](http://nodejs.org/)

Don’t have ruby? [Follow this great tutorial](http://code.tutsplus.com/tutorials/how-to-install-ruby-on-a-mac--net-21664)


Now, to install **Grunt**, open up terminal, and type:

    sudo npm install -g grunt-cli

This will install the command line interface for Grunt.

Now, to install **SASS** and **Compass**, open up terminal, and type:

    sudo gem install sass 
    sudo gem install compass

Some grunt plugins so grunt can talk to the other bits:

    sudo npm install grunt-contrib-watch -save-dev
    sudo npm install grunt-contrib-compass -save-dev 
    sudo npm install grunt-contrib-sass -save-dev

