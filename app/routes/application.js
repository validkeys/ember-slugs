import Ember from 'ember';

const posts = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" }
];

export default Ember.Route.extend({

  // Load some fixtures
  beforeModel() {
    return this.store.pushPayload('post', {posts});
  }

});
