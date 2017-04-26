import Ember from 'ember';

export default Ember.Route.extend({
  amp: Ember.inject.service(),
  fastboot: Ember.inject.service('fastboot'),
  model() {
    return this.store.findAll('sac');
  },
  afterModel() {
    const amp = this.get('amp');

    amp.set('canonicalUrl', './');
    amp.registerExtension('accordion');
    amp.registerExtension('form');
    amp.registerExtension('sidebar');
  }
});
