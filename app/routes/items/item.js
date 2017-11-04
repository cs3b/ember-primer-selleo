import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  db: service(),
  model(params) {
    return get(this, 'db').find('items', params.item_id);
  }
});
