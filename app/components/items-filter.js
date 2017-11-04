import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
   this._super(...arguments);
   this.set('searchTerm', this.get('query'));
  },
  actions: {
    termChange() {
      Ember.run.debounce(this, this.updateQuery, 500);
    }
  },
  updateQuery() {
    this.get('onChange')(this.get('searchTerm'));
  },   
});
