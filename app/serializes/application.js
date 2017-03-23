import DS from 'ember-data';

export default DS.JSONSerializer.extend({

 normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedDocument = this._super(...arguments);
    // Customize document meta
    normalizedDocument.meta = camelCaseKeys(normalizedDocument.meta);
    console.log(normalizedDocument)
    return normalizedDocument;
  },


});
