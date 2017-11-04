import Ember from 'ember';

export default Ember.Component.extend({
  // router: Ember.inject.service(),
  tagName: 'li',
  classNames: ['flex items-center lh-copy pa3 ph0-l bb b--black-10'],
  // click() {
  //   this.get('router').transitionTo('items.item', this.get('thing'));
  // },
});
