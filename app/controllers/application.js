import Ember from 'ember';

const { computed: { sort, uniq, mapBy }, computed } = Ember;

export default Ember.Controller.extend({
  model: [
    {
      name: 'Unibike Xenon Bike',
      category: 'Sports & Outdoors',
      imageUrl: 'http://tachyons.io/img/avatar-mrmrs.jpg',
      since: '2014-08-30',
    },
    {
      name: 'Sony XZ Phone',
      category: 'Personal Electronic',
      imageUrl: 'http://tachyons.io/img/avatar-jxnblk.jpg',
      since: '2017-06-20',
    },
    {
      name: 'Wash Machine',
      category: 'Appliances',
      imageUrl: 'http://tachyons.io/img/avatar-jasonli.jpg',
      since: '2010-04-01',
    },
    {
      name: 'Dodge Viper',
      category: 'Cars',
      imageUrl:
        'https://images.pexels.com/photos/80465/ford-mustang-auto-vehicle-80465.jpeg?h=350&auto=compress&cs=tinysrgb',
      since: '2017-06-01',
    },
  ],

  nameSort: 'asc',
  itemsSorted: sort('itemsFiltered', 'itemsSort'),
  allCategories: mapBy('model', 'category'),
  categories: uniq('allCategories'),

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
    archive(item) {
      console.log(item);
      Ember.set(item, 'archive', true);
    },
    add(item) {
      this.get('model').pushObject(item);
    },
  },
});
