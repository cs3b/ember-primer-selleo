import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { get, getProperties, setProperties } from '@ember/object';

export default Component.extend({
  store: service(),
  // categories: alias('db.categories'),
  actions: {
    addItem() {
      let item = getProperties(this, 'name', 'category', 'imageUrl', 'since');

      get(this, 'store').createRecord('item', item);
      this._resetForm();
    },
    clearForm() {
      this._resetForm();
    }
  },
  _resetForm() {
   setProperties(this, {
      name: null,
      category: null,
      imageUrl: null,
      since: null,
    });
  },
});
