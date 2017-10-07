import Ember from 'ember';

export default Ember.Route.extend({
  db: Ember.inject.service(),
  model() {
    return this.get('db').all('items');
  },
  redirect(model, transition) {
    if (model[0] && transition.targetName == 'items.index') {
      this.transitionTo('items.item', model[0])
    }
  }
});
