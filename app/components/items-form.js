import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  db: service(),
  categories: alias('db.categories'),
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
