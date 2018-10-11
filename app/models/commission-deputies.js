import Magistrate from './magistrate';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { computed } from '@ember/object';

/**
 * Model para diputados de la comisión.
 *
 * @class Model.Commision-deputies
 * @extends Model.Profile
 */
export default Magistrate.extend({
  // Associations

  /**
   * Partido postulante, con el que obtuvo el cargo o fue elegido.
   *
   * @property partidoPostulante
   * @type partido
   */
  partidoPostulante: belongsTo('partido'),

  /**
   * Partido actual.
   *
   * @property partidoActual
   * @type partido
   */
  partidoActual: belongsTo('partido'),

  /**
   * Institución.
   *
   * @property partidoActual
   * @type partido
   */
  institucion: attr('string'),

  /**
   * Twitter de la institución.
   *
   * @property partidoActual
   * @type partido
   */
  twInstitucion: attr('string'),

  /**
   * Facebook de la institución.
   *
   * @property partidoActual
   * @type partido
   */
  fbInstitucion: attr('string'),

  /**
   * Foto de la institución.
   *
   * @property partidoActual
   * @type partido
   */
  fotoInstitucionUrl: attr('string'),

  /**
   * Correo electrónico de la institución.
   *
   * @property partidoActual
   * @type partido
   */
  emailInstitucion: attr('string'),

  /**
   * Pagina web de la institución.
   *
   * @property partidoActual
   * @type partido
   */
  webInstitucion: attr('string'),

  /**
  * Foto del perfil.
  *
  * @property fotoPerfil
  * @type String
  * @default "images/Magistrado.jpg"
  */
  fotoPerfil: computed('fotoUrl', function() {
    if (this.get('fotoUrl') !== '') {
      return this.get('fotoUrl');
    } else {
      if(this.get('sexo') === 'Masculino') {
        return 'https://raw.githubusercontent.com/RedCiudadana/Recursos-Contralor/gh-pages/Candidatos/Fotos/candidato.png';
      } else {
        return 'https://raw.githubusercontent.com/RedCiudadana/Recursos-Contralor/gh-pages/Candidatos/Fotos/candidata.png';
      }
    }
  })
});
