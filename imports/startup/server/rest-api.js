// Global API configuration
const Api = new Restivus({
	version: 'v1',
  useDefaultAuth: true,
  prettyJson: true
});

// Generates: POST on /api/users and GET, DELETE /api/users/:id for
// Meteor.users collection
Api.addCollection(Meteor.users, {
  excludedEndpoints: ['getAll', 'put','delete','post', 'patch'],
  routeOptions: {
    authRequired: true
  },
  endpoints: {
    post: {
      authRequired: false
    },
    delete: {
      roleRequired: 'admin'
    }
  }
});