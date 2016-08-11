import Ember from 'ember';

export default Ember.Route.extend({
  // Fetch all of the local posts
  model() {
    return this.store.peekAll('post');
  }
});
