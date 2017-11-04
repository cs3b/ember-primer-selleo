import Component from '@ember/component';
import { inject as service } from '@ember/service'
import { get } from '@ember/object'

export default Component.extend({
  router: service(),
  tagName: 'li',
  classNames: ['flex items-center lh-copy pa3 ph0-l bb b--black-10'],
  click() {
    get(this, 'router').transitionTo('items.item', get(this, 'thing'));
  },
});
