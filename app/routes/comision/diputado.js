import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Route.extend({
  spreadsheets: Ember.inject.service(),
  _routing: Ember.inject.service('-routing'),

  model(params) {
    const spreadsheet = this.get('spreadsheets');
    const _routing = this.get('_routing');

    return Ember.RSVP.hash({
      diputado: this.store.peekRecord('commission-deputies', params.id),
      diputados: this.modelFor('comision').diputados,
      resultadosEvaluaciones: spreadsheet
        .fetch('evaluaciones')
        .then((resultados) => {
          return Ember.A(resultados).filterBy('postuladorId', params.id)
        })
        .then((resultados) => {
          return resultados.map((resultado) => {
            return {
              perfil: this.store.peekRecord('perfil', resultado.perfilId),
              resultado: resultado.resultado
            }
          })
        })
    });
  },

  afterModel(model) {
    if (!Ember.isNone(model.diputado.get('nombre'))) {
      this.set('breadCrumb', {
        title: model.diputado.get('nombre')
      });
    }
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties(model);
    controller.setProperties({
      disqusShortname: config.disqus.shortname
    });
  }
});
