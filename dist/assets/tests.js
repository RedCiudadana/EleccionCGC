'use strict';

define('mi-guatemala/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/partido.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/partido.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/perfil.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/perfil.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/postulador-comision.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/postulador-comision.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/spreadsheet.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/spreadsheet.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/front-porfolio-visualization.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/front-porfolio-visualization.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/comision/diputado/frente-a-frente.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/comision/diputado/frente-a-frente.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/comision/diputado/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/comision/diputado/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass ESLint\n\n2:10 - \'run\' is defined but never used. (no-unused-vars)\n2:15 - \'scheduleOnce\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/perfil/frente-a-frente.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/perfil/frente-a-frente.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/perfil/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/perfil/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/perfiles.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/perfiles.js should pass ESLint\n\n46:24 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/tabla-gradacion.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tabla-gradacion.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-html-safe.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/get-html-safe.js should pass ESLint\n\n3:55 - \'rest\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('helpers/is-numeric.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/is-numeric.js should pass ESLint\n\n');
  });

  QUnit.test('models/partido.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/partido.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)\n4:10 - \'hasMany\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/perfil.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/perfil.js should pass ESLint\n\n');
  });

  QUnit.test('models/postulador-comision.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/postulador-comision.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/comision.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/comision.js should pass ESLint\n\n');
  });

  QUnit.test('routes/comision/diputado.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/comision/diputado.js should pass ESLint\n\n');
  });

  QUnit.test('routes/comision/diputado/fact-checking.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/comision/diputado/fact-checking.js should pass ESLint\n\n');
  });

  QUnit.test('routes/comision/diputado/frente-a-frente.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/comision/diputado/frente-a-frente.js should pass ESLint\n\n');
  });

  QUnit.test('routes/comision/diputado/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/comision/diputado/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/comision/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/comision/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/institucion.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/institucion.js should pass ESLint\n\n');
  });

  QUnit.test('routes/institucion/frente-a-frente.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/institucion/frente-a-frente.js should pass ESLint\n\n');
  });

  QUnit.test('routes/institucion/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/institucion/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/metodologia.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/metodologia.js should pass ESLint\n\n');
  });

  QUnit.test('routes/perfil.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/perfil.js should pass ESLint\n\n');
  });

  QUnit.test('routes/perfil/fact-checking.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/perfil/fact-checking.js should pass ESLint\n\n');
  });

  QUnit.test('routes/perfil/frente-a-frente.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/perfil/frente-a-frente.js should pass ESLint\n\n');
  });

  QUnit.test('routes/perfil/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/perfil/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/perfil/propuestas.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/perfil/propuestas.js should pass ESLint\n\n');
  });

  QUnit.test('routes/resultados.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/resultados.js should pass ESLint\n\n');
  });

  QUnit.test('routes/tabla-gradacion.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tabla-gradacion.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/perfil.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/perfil.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/postulador-comision.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/postulador-comision.js should pass ESLint\n\n');
  });

  QUnit.test('services/spreadsheets.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/spreadsheets.js should pass ESLint\n\n44:11 - Unexpected console statement. (no-console)\n66:13 - Unexpected console statement. (no-console)\n77:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('transforms/frente-a-frente.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/frente-a-frente.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/informacion-general.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/informacion-general.js should pass ESLint\n\n');
  });
});
define('mi-guatemala/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('mi-guatemala/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate('DEPRECATED `import { ' + name + ' } from \'../../tests/helpers/ember-power-select\';` is deprecated. Please, replace it with `import { ' + name + ' } from \'ember-power-select/test-support/helpers\';`', false, { until: '1.11.0', id: 'ember-power-select-test-support-' + name }));

      return fn.apply(undefined, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('mi-guatemala/tests/helpers/flash-message', ['ember-cli-flash/flash/object'], function (_object) {
  'use strict';

  _object.default.reopen({
    init: function init() {}
  });
});
define('mi-guatemala/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'mi-guatemala/tests/helpers/start-app', 'mi-guatemala/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('mi-guatemala/tests/helpers/resolver', ['exports', 'mi-guatemala/resolver', 'mi-guatemala/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('mi-guatemala/tests/helpers/start-app', ['exports', 'mi-guatemala/app', 'mi-guatemala/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('mi-guatemala/tests/integration/components/front-porfolio-visualization-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('front-porfolio-visualization', 'Integration | Component | front porfolio visualization', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "q1jck57/",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"front-porfolio-visualization\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "K5HUloBp",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"front-porfolio-visualization\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('mi-guatemala/tests/test-helper', ['mi-guatemala/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit', 'mi-guatemala/tests/helpers/flash-message'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('mi-guatemala/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/flash-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/flash-message.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/front-porfolio-visualization-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/front-porfolio-visualization-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/institucion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/institucion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/spreadsheets-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/spreadsheets-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/comision/diputado/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/comision/diputado/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/perfil/frente-a-frente-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/perfil/frente-a-frente-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/perfiles-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/perfiles-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/tabla-gradacion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/tabla-gradacion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/get-html-safe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/get-html-safe-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/is-numeric-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/is-numeric-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/institucion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/institucion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/comision-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/comision-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/comision/diputado-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/comision/diputado-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/comision/diputado/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/comision/diputado/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/comision/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/comision/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/institucion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/institucion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/institucion/frente-a-frente-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/institucion/frente-a-frente-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/institucion/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/institucion/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/metodologia-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/metodologia-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/perfil/fact-checking-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/perfil/fact-checking-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/perfil/frente-a-frente-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/perfil/frente-a-frente-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/perfil/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/perfil/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/perfil/propuestas-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/perfil/propuestas-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/resultados-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/resultados-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/tabla-gradacion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tabla-gradacion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/perfil-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/perfil-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/spreadsheets-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/spreadsheets-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/frente-a-frente-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/frente-a-frente-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/informacion-general-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/informacion-general-test.js should pass ESLint\n\n');
  });
});
define('mi-guatemala/tests/unit/adapters/institucion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:institucion', 'Unit | Adapter | institucion', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('mi-guatemala/tests/unit/adapters/spreadsheets-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:spreadsheets', 'Unit | Adapter | spreadsheets', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('mi-guatemala/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mi-guatemala/tests/unit/controllers/comision/diputado/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:comision/diputado/index', 'Unit | Controller | comision/diputado/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mi-guatemala/tests/unit/controllers/perfil/frente-a-frente-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:perfil/frente-a-frente', 'Unit | Controller | perfil/frente a frente', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mi-guatemala/tests/unit/controllers/perfiles-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:perfiles', 'Unit | Controller | perfiles', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mi-guatemala/tests/unit/controllers/tabla-gradacion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:tabla-gradacion', 'Unit | Controller | tabla gradacion', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mi-guatemala/tests/unit/helpers/get-html-safe-test', ['mi-guatemala/helpers/get-html-safe', 'qunit'], function (_getHtmlSafe, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | get html safe');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _getHtmlSafe.getHtmlSafe)([42]);
    assert.ok(result);
  });
});
define('mi-guatemala/tests/unit/helpers/is-numeric-test', ['mi-guatemala/helpers/is-numeric', 'qunit'], function (_isNumeric, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | is numeric');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _isNumeric.isNumeric)([42]);
    assert.ok(result);
  });
});
define('mi-guatemala/tests/unit/models/institucion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('institucion', 'Unit | Model | institucion', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('mi-guatemala/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/comision-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:comision', 'Unit | Route | comision', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/comision/diputado-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:comision/diputado', 'Unit | Route | comision/diputado', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/comision/diputado/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:comision/diputado/index', 'Unit | Route | comision/diputado/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/comision/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:comision/index', 'Unit | Route | comision/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/institucion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:institucion', 'Unit | Route | institucion', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/institucion/frente-a-frente-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:institucion/frente-a-frente', 'Unit | Route | institucion/frente a frente', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/institucion/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:institucion/index', 'Unit | Route | institucion/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/metodologia-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:metodologia', 'Unit | Route | metodologia', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/perfil/fact-checking-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:perfil/fact-checking', 'Unit | Route | perfil/fact checking', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/perfil/frente-a-frente-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:perfil/frente-a-frente', 'Unit | Route | perfil/frente a frente', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/perfil/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:perfil/index', 'Unit | Route | perfil/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/perfil/propuestas-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:perfil/propuestas', 'Unit | Route | perfil/propuestas', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/resultados-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:resultados', 'Unit | Route | resultados', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/routes/tabla-gradacion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:tabla-gradacion', 'Unit | Route | tabla gradacion', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mi-guatemala/tests/unit/serializers/perfil-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('perfil', 'Unit | Serializer | perfil', {
    // Specify the other units that are required for this test.
    needs: ['serializer:perfil']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('mi-guatemala/tests/unit/services/spreadsheets-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:spreadsheets', 'Unit | Service | spreadsheets', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('mi-guatemala/tests/unit/transforms/frente-a-frente-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('transform:frente-a-frente', 'Unit | Transform | frente a frente', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var transform = this.subject();
    assert.ok(transform);
  });
});
define('mi-guatemala/tests/unit/transforms/informacion-general-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('transform:informacion-general', 'Unit | Transform | informacion general', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var transform = this.subject();
    assert.ok(transform);
  });
});
require('mi-guatemala/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
