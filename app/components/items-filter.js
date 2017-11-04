import { debounce } from '@ember/runloop';
import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  didReceiveAttrs() {
   this._super(...arguments);
   set(this, 'searchTerm', get(this, 'query'));
  },
  actions: {
    termChange() {
      debounce(this, this.updateQuery, 500);
    }
  },
  updateQuery() {
    get(this, 'onChange')(get(this, 'searchTerm'));
  },   
});
