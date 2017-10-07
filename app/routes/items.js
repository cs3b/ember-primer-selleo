import Ember from 'ember';

export default Ember.Route.extend({
  db: Ember.inject.service(),
  model() {
    return this.get('db').all('items');
  },
});
