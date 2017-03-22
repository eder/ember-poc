import Ember from 'ember';
import API from '../utils/api-request';

export default Ember.Service.extend({
  init() {
    API.request('/bins/g4ohz')
  }
});
