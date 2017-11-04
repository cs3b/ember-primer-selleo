import Ember from 'ember';

const { computed: { sort, uniq, mapBy }, computed } = Ember;

export default Ember.Controller.extend({
  queryParams: ['query'],
  query: '',
  nameSort: 'asc',
  itemsSorted: sort('itemsFiltered', 'itemsSort'),

  itemsSort: computed('nameSort', function() {
    return [`name:${this.get('nameSort')}`]
  }),

  itemsFiltered: computed('query', 'model.[]', function() {
    let query = this.get('query');
    let items = this.get('model');
    let regexp = new RegExp(query, 'i');

    return items.filter(item => regexp.test(item.name));
  }),

  actions: {
    toggleSort() {
      let newOrder = this.get('nameSort') == 'asc' ? 'desc' : 'asc';
      this.set('nameSort', newOrder);
    },
  },
});
