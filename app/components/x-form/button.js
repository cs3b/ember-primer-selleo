import Component from '@ember/component';

const Button = Component.extend({
  classNames: ['near-white', 'bg-animate', 'mw-20', 'bg-near-black', 'hover-bg-gray', 'inline-flex', 'items-center', 'ma2', 'tc', 'br2', 'pa2'],
  attributeBindings: ['role'],
  role: 'button'
});

Button.reopenClass({
  positionalParams: ['label']
})

export default Button;
