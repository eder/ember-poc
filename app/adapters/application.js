import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  //host: 'https://emberpoc-762c2.firebaseio.com',
  buildURL: () => {
    return `https://emberpoc-762c2.firebaseio.com/.json`;
  }
});
