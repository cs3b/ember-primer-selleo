import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';
import { get, set } from '@ember/object';

export default Controller.extend({
  queryParams: ['query'],
  query: '',
  nameSort: 'asc',
  itemsSorted: sort('model', 'itemsSort'),

  itemsSort: computed('nameSort', function() {
    return [`name:${get(this, 'nameSort')}`]
  }),

  actions: {
    toggleSort() {
      let newOrder = get(this, 'nameSort') == 'asc' ? 'desc' : 'asc';
      set(this, 'nameSort', newOrder);
    },
  },
});
