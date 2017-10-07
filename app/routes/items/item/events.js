import Ember from 'ember';

export default Ember.Route.extend({
  db: Ember.inject.service(),
  model() {
    let { item_id } = this.paramsFor('items.item');
    return this.get('db')
      .query('events', 'item_id', item_id);
  }
});
