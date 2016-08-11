import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if (!params.post_id) {
      params.post_id = params.post_slug.match(/[^-]*/)[0];
    }
    return this.store.peekRecord('post', params.post_id);
  },

  // This is where we tell Ember what the
  // value of the :post_slug param should be in the URL.
  // We also return the post_id so that our model hook
  // can just fetch the model id
  // http://emberjs.com/api/classes/Ember.Route.html#method_serialize
  serialize: function(model, params) {
    return {
      post_id:    model.get('id'),
      post_slug:  model.get('slug')
    };
  }
});
