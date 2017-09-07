import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addItem() {
      let item = {
        name: this.get('name'),
        category: this.get('category'),
        imageUrl: this.get('imageUrl'),
        since: this.get('since'),
      };
      this.get('onSubmit')(item);
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
