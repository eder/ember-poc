import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  buildURL: () => {
    return `https://emberpoc-762c2.firebaseio.com/.json`;
  }
});
