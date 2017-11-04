import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  db: service(),
  queryParams: {
    query: {
      replace: true
    }
  },
  beforeModel() {
    this.get('db').all('items').forEach( item => this.store.createRecord('item', item));
    this.get('db').all('events').forEach( event => this.store.createRecord('event', event));
  },
  model() {
    return this.store.peekAll('item');
  },
  redirect(model, transition) {
    if (model[0] && transition.targetName == 'items.index') {
      this.transitionTo('items.item', model[0])
    }
  }
});
