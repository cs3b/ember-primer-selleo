import Ember from 'ember';

const { computed: {mapBy, uniq}} = Ember;

export default Ember.Service.extend({
  all(collection) {
   return this[collection]
  },
  add(collection, element) {
   this[collection].pushObject(element);
  },
  allCategories: mapBy('items', 'category'),
  categories: uniq('allCategories'),
  items: [
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
});
