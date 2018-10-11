import $ from 'jquery';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  esMujer: true,
  esHombre: true,

  currentSelector: computed(
    'presidente',
    'ccee',
    'cpa',
    'decano',
    function() {
      if (
        !this.get('presidente')
            && !this.get('ccee')
            && !this.get('cpa')
            && !this.get('decano')
      ) {
        return '*';
      }

      let selectors = [];

      if (this.get('presidente')) {
        selectors.push('.presidente');
      }

      if (this.get('ccee')) {
        selectors.push('.ccee');
      }

      if (this.get('cpa')) {
        selectors.push('.cpa');
      }

      if (this.get('decano')) {
        selectors.push('.decano');
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
