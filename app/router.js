import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('items', function() {
    this.route('item', { path: '/:item_id'}, function() {
      this.route('events', { path: '/'});
    });
    this.route('new');
  });
  this.route('not-found', { path: '/*whatever'})
});

export default Router;
