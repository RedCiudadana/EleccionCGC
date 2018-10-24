import Ember from 'ember';
import config from '../../config/environment';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { A } from '@ember/array';

export default Ember.Route.extend({
  spreadsheets: service(),
  _routing: service('-routing'),

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
        }),
      perfilFuncionalidades: spreadsheet
      .fetchConfig('postulador-funcionalidades')
      .then((links) => {
        return A(links)
          .filter((link) => {
            if (link.link) {
              return true;
            }

            if (!_routing.hasRoute(link.route)) {
              throw new Error(`Route not recognized: ${link.route}`);
            }

            return true;
          });
      }),
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
