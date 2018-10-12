import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { computed } from '@ember/object';

/**
 * Model para diputados de la comisión.
 *
 * @class Model.Commision-deputies
 */
export default Model.extend({

  /**
  * Nombre.
  *
  * @property nombre
  * @type String
  */
  nombre: attr(),

  /**
  * Nombre de la institución.
  *
  * @property institucion
  * @type String
  */
  institucion: attr(),

  /**
  * Cargo.
  *
  * @property cargo
  * @type String
  */
  cargo: attr(),

  /**
  * Profesión.
  *
  * @property profesion
  * @type String
  */
  profesion: attr(),

  /**
  * Nivel de educación.
  *
  * @property educacion
  * @type String
  */
  educacion: attr(),

  /**
  * Fecha de nacimiento.
  *
  * @property fechaNacimiento
  * @type String
  */
  fechaNacimiento: attr(),

  /**
  * Lugar de nacimiento.
  *
  * @property lugarNacimiento
  * @type String
  */
  lugarNacimiento: attr(),

  /**
  * Sexo
  *
  * @property sexo
  * @type String
  */
  sexo: attr(),

  /**
  * Estado
  *
  * @property estado
  * @type String
  */
  estado: attr(),

  /**
  * URL de la foto.
  *
  * @property fotoURL
  * @type String
  */
  fotoUrl: attr(),

  /**
  * Biografia.
  *
  * @property biografia
  * @type String
  */
  biografia: attr(),

  /**
  * Trayectoria
  *
  * @property trayectoria
  * @type String
  */
  trayectoria: attr(),

  /**
  * URL del perfil de Facebook.
  *
  * @property fb
  * @type String
  */
  fb: attr(),

  /**
  * URL del perfil de Twitter.
  *
  * @property tw
  * @type String
  */
  tw: attr(),

  /**
  * Correo electrónico.
  *
  * @property email
  * @type String
  */
  email: attr(),

  /**
  * URL de la foto de la institución.
  *
  * @property fotoInstitucionUrl
  * @type String
  */
  fotoInstitucionUrl: attr(),

  /**
  * URL del perfil de la institucion de Facebook.
  *
  * @property fbInstitucion
  * @type String
  */
  fbInstitucion: attr(),

  /**
  * URL del perfil de la institucion de Twitter.
  *
  * @property twInstitucion
  * @type String
  */
  twInstitucion: attr(),

  /**
  * Correo electrónico de la institución.
  *
  * @property emailInstitucion
  * @type String
  */
  emailInstitucion: attr(),

  /**
  * Dirección web de la institución.
  *
  * @property webInstitucion
  * @type String
  */
  webInstitucion: attr(),

  /**
   * Información general. Campos para mostrar en información general. 
   *
   * @property informacionGeneral
   * @type informacion-general
   */
  informacionGeneral: attr('informacion-general'),

  /**
  * Foto para usar en la app.
  *
  * @property fotoPerfil
  * @type String
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
  }),

  badgeColor: computed('institucion', 'id', function() {
    if (this.get('institucion').includes('Universidad') || this.get('institucion') === 'USAC') {
      return 'bg-warning';
    }

    if (this.get('id').includes('ccee')) {
      return 'bg-blue';
    }

    if (this.get('id').includes('cpa')) {
      return 'bg-info';
    }
  }),

  /**
  * Selector para Isotope. Genera un 'String' con etiquetas para poder filtrar elementos desde el HTML con Isotope.
  *
  * @property selector
  * @type String
  * @default ""
  */
  selector: computed('id', function() {
    let returnValue = '';

    if (this.get('id').includes('presidente')) {
      returnValue += ' presidente';
    }


    if (this.get('id').includes('ccee')) {
      returnValue += ' ccee';
    }

    if (this.get('id').includes('cpa')) {
      returnValue += ' cpa';
    }

    if (this.get('id').includes('decano')) {
      returnValue += ' decano';
    }

    return returnValue;
  })
});
