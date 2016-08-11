import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', {path: "/posts"}, function() {
    this.route('post', { path: "/:post_slug" });
  });
});

export default Router;
