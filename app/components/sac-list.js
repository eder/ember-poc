import Ember from 'ember';

export default Ember.Component.extend({
  isClicked: false,
  actions: {
   showContent: function(){
     this.toggleProperty('isClicked');
   }
 }
});
