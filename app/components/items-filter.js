import { debounce } from '@ember/runloop';
import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs() {
   this._super(...arguments);
   this.set('searchTerm', this.get('query'));
  },
  actions: {
    termChange() {
      debounce(this, this.updateQuery, 500);
    }
  },
  updateQuery() {
    this.get('onChange')(this.get('searchTerm'));
  },   
});
