import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let { item_id } = this.paramsFor('items.item');
    return this.store.query('event', { filter: { item: {id: item_id }}});
  },
});
