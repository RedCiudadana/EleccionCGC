import Route from '@ember/routing/route';

export default Route.extend({
  breadCrumb: null,

  model() {
    return this.modelFor('comision.diputado');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('perfilUnoId', model.diputado.get('id'));

    controller.set(
      'frenteAFrenteFuncionalidad',
      Ember.A(model.postuladorFuncionalidades)
        .findBy('route', 'comision.diputado.frente-a-frente')
    );

    let frenteAFrenteFields = this.store
      .serializerFor('commission-deputies')
      .get('frenteAFrenteFields');

    controller.set('frenteAFrenteFields', frenteAFrenteFields);
  },

  actions: {
  }
});
