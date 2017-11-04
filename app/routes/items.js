import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    query: {
      replace: true
    }
  },
  model() {
    return this.store.findAll('item');
  },
  redirect(model, transition) {
    if (model[0] && transition.targetName == 'items.index') {
      this.transitionTo('items.item', model[0])
    }
  }
});
