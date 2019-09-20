var path = require('path');

var apos = require('apostrophe')({
  shortName: 'skivakanties',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    'apostrophe-attachments': {svgImages: true},
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'video-widgets': {},
    'description-widgets': {},
    'offert-widgets': {},
    'details-widgets': {},
    'footer-widgets': {},
    'area-widgets' : {},
    'products': {},
    'products-widgets': {
      extend: 'apostrophe-pieces-widgets',
      filters: {
        projection: {
          title: 1,
          name: 1,
          location: 1,
          city: 1,
          address: 1,
          country:1,
          inDate:1,
          outDate:1,
          days:1,
          price:1,
          currency:1,
          priceDetails:1,
          select:1,
          background:1,
          starIcon:1,
          locationPin:1,
          calendar:1,
          pretyTitle:1,
          // Not a real database property, but including it in the projection
          // fetches everything needed to populate it
          _url: 1,
        }
      }
    }
  }
});
