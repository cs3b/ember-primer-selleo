import Component from '@ember/component';
import { get, computed } from '@ember/object'

const Input = Component.extend({
  placeholder: computed('label', function() {
    return `Please enter the ${get(this, 'label').toLowerCase()}`
  })
});

Input.reopenClass({
  positionalParams: ['value']
})

export default Input;