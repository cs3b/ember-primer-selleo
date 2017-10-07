import Ember from 'ember';
import RSVP from 'rsvp';

const { run: { later }} = Ember;
const { Promise } = RSVP;

const { computed: {mapBy, uniq}} = Ember;

export default Ember.Service.extend({
  all(collection) {
    return new Promise((resolve) => {
      later(() => resolve(this[collection]), 750)
    })
  },
  query(collection, key, value) {
   return this[collection]
     .filter(el => el[key] == value)
  },
  find(collection, id) {
    return new Promise((resolve) => {
      later(() => resolve(this[collection].find(el => el.id == id)), 750)
    })
  },
  add(collection, element) {
   this[collection].pushObject(element);
  },
  allCategories: mapBy('items', 'category'),
  categories: uniq('allCategories'),
  events: [
    {
      id: 1,
      title: 'rysa na lusterku',
      item_id: 4
    },
    { 
      id: 2,
      title: 'przebita opona',
      item_id: 1
    }
  ],
  items: [
    {
      id: 1,
      name: 'Unibike Xenon Bike',
      category: 'Sports & Outdoors',
      imageUrl: 'http://tachyons.io/img/avatar-mrmrs.jpg',
      since: '2014-08-30',
    },
    {
      id: 2,
      name: 'Sony XZ Phone',
      category: 'Personal Electronic',
      imageUrl: 'http://tachyons.io/img/avatar-jxnblk.jpg',
      since: '2017-06-20',
    },
    {
      id: 3,
      name: 'Wash Machine',
      category: 'Appliances',
      imageUrl: 'http://tachyons.io/img/avatar-jasonli.jpg',
      since: '2010-04-01',
    },
    {
      id: 4,
      name: 'Dodge Viper',
      category: 'Cars',
      imageUrl:
        'https://images.pexels.com/photos/80465/ford-mustang-auto-vehicle-80465.jpeg?h=350&auto=compress&cs=tinysrgb',
      since: '2017-06-01',
    },
  ],
});
