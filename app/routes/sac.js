import Ember from 'ember';

export default Ember.Route.extend({
  amp: Ember.inject.service(),
  model() {
    return this.store.findAll('sac');
  },

  afterModel(sac) {
    //this.get('amp').set('canonicalUrl', s);
    //this.get('amp').set('title', sac.get('title'));
    //this.get('amp').registerExtension('twitter');
    console.log(sac);
    }
});
