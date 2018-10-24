import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | c/d', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:c/d');
    assert.ok(route);
  });
});
