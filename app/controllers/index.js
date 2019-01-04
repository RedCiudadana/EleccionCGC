import $ from 'jquery';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  estaEnProceso: true,

  currentSelector: computed(
    'esMujer',
    'esHombre',
    'estaEnProceso',
    'estaDescalificado',
    'esFinalista',
    function() {
      if (
        !this.get('esMujer')
            && !this.get('esHombre')
            && !this.get('estaEnProceso')
            && !this.get('estaDescalificado')
            && !this.get('esFinalista')
      ) {
        return '*';
      }

      let selectors = [];

      if (this.get('esMujer')) {
        selectors.push('.mujer');
      }

      if (this.get('esHombre')) {
        selectors.push('.hombre');
      }

      if (this.get('estaEnProceso')) {
        selectors.push('.enProceso');
      }

      if (this.get('estaDescalificado')) {
        selectors.push('.descalificado');
      }

      if (this.get('esFinalista')) {
        selectors.push('.finalista');
      }

      return selectors.join(', ');
    }
  ),

  _applyFilter() {

    var $container = $('#portfolio');

    $container.isotope({transitionDuration: '0.65s'});

    $container.isotope({filter: this.get('currentSelector')});

    return false;
  },

  actions: {
    applyFilter() {
      return this._applyFilter();
    }
  }
});
