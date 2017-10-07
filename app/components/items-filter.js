import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    termChange() {
      Ember.run.debounce(this, this.updateQuery, 500);
    }
  },
  updateQuery() {
    this.get('onChange')(this.get('searchTerm'));
  },   
});
