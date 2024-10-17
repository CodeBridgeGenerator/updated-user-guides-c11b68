const { UserGuides } = require('./userGuides.class');
const createModel = require('../../models/userGuides.model');
const hooks = require('./userGuides.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/userGuides', new UserGuides(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('userGuides');

  // Get the schema of the collections 
  app.get("/userGuidesSchema", function (request, response) {
    const schema = createModel(app).schema.tree;
    const result = Object.keys(schema).map(key => {
      return {
        field: key,
        properties: schema[key]
      };
    });
    return response.status(200).json(result);
  });

  service.hooks(hooks);
};