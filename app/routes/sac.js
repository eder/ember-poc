import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({
  amp: Ember.inject.service(),
  headData: Ember.inject.service(),
  model() {
    return this.store.findAll('sac');
  },

  afterModel() {
    //this.get('amp').set('canonicalUrl', 'http://');
    //this.get('amp').set('title', 'Works!!');
    this.get('amp').registerExtension('twitter');
    set(this, 'headData.title', 'Demo App');
  }
});
