import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    query: {
      refreshModel: true,
      replace: true
    }
  },
  model(params) {
    if (params.query) {
      return this.store.query('item', {filter: {search: params.query}});
    } else {
      return this.store.findAll('item');
    }
  },
  redirect(model, transition) {
    if (model[0] && transition.targetName == 'items.index') {
      this.transitionTo('items.item', model[0])
    }
  }
});
