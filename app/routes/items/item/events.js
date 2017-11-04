import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  db: service(),
  model() {
    let { item_id } = this.paramsFor('items.item');
    return get(this, 'db')
      .query('events', 'item_id', item_id);
  }
});
