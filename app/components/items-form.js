import Ember from 'ember';

export default Ember.Component.extend({
  db: Ember.inject.service(),
  categories: Ember.computed.alias('db.categories'),
  actions: {
    addItem() {
      let item = this.getProperties('name', 'category', 'imageUrl', 'since');

      this.get('db').add('items', item);
      this._resetForm();
    },
  },
  _resetForm() {
    this.setProperties({
      name: null,
      category: null,
      imageUrl: null,
      since: null,
    });
  },
});
