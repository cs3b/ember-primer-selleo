import Ember from 'ember';

export default Ember.Route.extend({
  db: Ember.inject.service(),
  queryParams: {
    query: {
      replace: true
    }
  },
  model() {
    return this.get('db').all('items');
  },
  redirect(model, transition) {
    if (model[0] && transition.targetName == 'items.index') {
      this.transitionTo('items.item', model[0])
    }
  }
});
