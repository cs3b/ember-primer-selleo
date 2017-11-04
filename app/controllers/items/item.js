import Controller from '@ember/controller';
import { set, get } from '@ember/object';

export default Controller.extend({
  actions: {
    archive() {
      set(get(this, 'model'), 'archived', true)
    }
  }
});
