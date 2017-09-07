import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | items element', function() {
  setupComponentTest('items-element', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#items-element}}
    //     template content
    //   {{/items-element}}
    // `);

    this.render(hbs`{{items-element}}`);
    expect(this.$()).to.have.length(1);
  });
});
