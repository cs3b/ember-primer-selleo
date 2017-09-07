import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['flex items-center lh-copy pa3 ph0-l bb b--black-10'],
  classNameBindings: ['thing.archive:strike-ns'],
  click() {
    this.get('onClick')();
  },
});
