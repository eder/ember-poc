import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('sac');
    return [{ title: 'Test', body: 'Corpo'}];
  }
});
