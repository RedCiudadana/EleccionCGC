import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  informacionGeneralFields: null,
  frenteAFrenteFields: null,

  normalize(modelClass, resourceHash) {
    resourceHash.informacionGeneral = {};

    this.get('informacionGeneralFields').forEach((item) => {
      resourceHash.informacionGeneral[item.field] = {
        label: item.label,
        value: resourceHash[item.field]
      };
    });

    return this._super(modelClass, resourceHash);
  }
});
