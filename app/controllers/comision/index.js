import $ from 'jquery';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  esMujer: true,
  esHombre: true,

  currentSelector: computed(
    'esMujer',
    'esHombre',
    'estaEnProceso',
    'estaDescalificado',
    function() {
      if (
        !this.get('esMujer')
            && !this.get('esHombre')
            && !this.get('estaEnProceso')
            && !this.get('estaDescalificado')
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

      return selectors.join(', ');
    }
  ),

  _applyFilter() {

    var $container = $('#portfolio');

    $container.isotope({transitionDuration: '0.65s'});

    $container.isotope({filter: this.get('currentSelector')});

    console.log(this.get('currentSelector'));
    console.log(this.get('esMujer'));
    console.log(this.get('esHombre'));

    return false;
  },

  actions: {
    applyFilter() {
      return this._applyFilter();
    }
  }
});
