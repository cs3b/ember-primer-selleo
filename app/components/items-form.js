import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { get, getProperties, setProperties } from '@ember/object';

export default Component.extend({
  db: service(),
  categories: alias('db.categories'),
  actions: {
    addItem() {
      let item = getProperties(this, 'name', 'category', 'imageUrl', 'since');

      get(this, 'db').add('items', item);
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
