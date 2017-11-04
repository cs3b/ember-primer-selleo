import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  db: service(),
  model(params) {
    return this.get('db').find('items', params.item_id);
  }
});
