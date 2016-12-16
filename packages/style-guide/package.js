Package.describe({
    name: 'trimurtix:style-guide',
    version: '0.0.1',
    summary: '',
    git: '',
    documentation: 'README.md'
});

// Npm.depends({
//   "trimurtix-style-guide": "0.0.5"
// });

Package.onUse(function(api) {
    api.versionsFrom('1.3.1');
    api.use('ecmascript');
    api.use('fourseven:scss@3.4.1');

    // API Variables
    //var styles = '.npm/package/node_modules/trimurtix-style-guide/src/scss';
    var styles = 'style-guide/src/scss';

    // Styles
    api.addFiles([

        // Config Variables
        styles + '/config/_variables.scss',
        styles + '/config/_mixins.scss',
        styles + '/config/_utilities.scss',
        styles + '/config/_reset.scss',

        // Base
        styles + '/base/_text.scss',
        styles + '/base/_colors.scss',
        styles + '/base/_images.scss',
        styles + '/base/_forms.scss',
        styles + '/base/_flexbox.scss',
        styles + '/base/_media.scss',
       
        // Layout
        styles + '/layout/_grid.scss',
        styles + '/layout/_toolbar.scss',
        styles + '/layout/_footer.scss',
        styles + '/layout/_navigation.scss',

        // Modules
        styles + '/modules/_avatar.scss',
        styles + '/modules/_article.scss',
        styles + '/modules/_badge.scss',
        styles + '/modules/_breadcrumb.scss',
        styles + '/modules/_button.scss',
        styles + '/modules/_card.scss',
        styles + '/modules/_chips.scss',
        styles + '/modules/_collapse.scss',
        styles + '/modules/_depths.scss',
        styles + '/modules/_dialog.scss',
        styles + '/modules/_list.scss',
        styles + '/modules/_toast.scss',
        styles + '/modules/_loading.scss',
        styles + '/modules/_pagination.scss',
        styles + '/modules/_table.scss',

        // Adaptive
        styles + '/adaptive/_widescreen.scss',
        styles + '/adaptive/_desktop.scss',
        styles + '/adaptive/_tablet.scss',
        styles + '/adaptive/_landscape.scss',
        styles + '/adaptive/_portrait.scss',
        styles + '/adaptive/_no-screen.scss',

         // @imports
        styles + '/styles.scss'


    ], 'client');

    api.mainModule('style-guide.js');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('trimurtix:style-guide');
    api.mainModule('style-guide-tests.js');
});
