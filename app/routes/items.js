import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  db: service(),
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
