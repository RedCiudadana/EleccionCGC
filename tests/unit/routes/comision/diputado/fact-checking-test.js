import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | comision/diputado/fact-checking', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:comision/diputado/fact-checking');
    assert.ok(route);
  });
});
