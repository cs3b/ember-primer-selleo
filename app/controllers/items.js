import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';
import { get, set } from '@ember/object';

export default Controller.extend({
  queryParams: ['query'],
  query: '',
  nameSort: 'asc',
  itemsSorted: sort('itemsFiltered', 'itemsSort'),

  itemsSort: computed('nameSort', function() {
    return [`name:${get(this, 'nameSort')}`]
  }),

  itemsFiltered: computed('query', 'model.[]', function() {
    let query = get(this, 'query');
    let items = get(this, 'model');
    let regexp = new RegExp(query, 'i');

    return items.filter(item => regexp.test(item.name));
  }),

  actions: {
    toggleSort() {
      let newOrder = get(this, 'nameSort') == 'asc' ? 'desc' : 'asc';
      set(this, 'nameSort', newOrder);
    },
  },
});
