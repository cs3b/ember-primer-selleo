import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  db: service(),
  model() {
    let { item_id } = this.paramsFor('items.item');
    return this.get('db')
      .query('events', 'item_id', item_id);
  }
});
