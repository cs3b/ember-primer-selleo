import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let { item_id } = this.paramsFor('items.item');
    // return this.store.query('event', { item_id: item_id });
    return this.store.peekAll('event').filter( e => e.item_id == item_id)
  },
});
