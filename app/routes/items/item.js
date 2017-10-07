import Ember from 'ember';

export default Ember.Route.extend({
  db: Ember.inject.service(),
  model(params) {
    return this.get('db').find('items', params.item_id);
  }
});
