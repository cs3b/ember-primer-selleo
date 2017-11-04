import Component from '@ember/component';

const Input = Component.extend({
});

Input.reopenClass({
  positionalParams: ['value']
})

export default Input;