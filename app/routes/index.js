import Ember from 'ember';

export default Ember.Route.extend({
  amp: Ember.inject.service(),
  afterModel() {
    const amp = this.get('amp');
    amp.registerExtension('sidebar');
  }
});
