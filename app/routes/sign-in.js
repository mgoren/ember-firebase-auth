import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('welcome');
    }
  },
  actions: {
    transitionToWelcome() {
      this.transitionTo('welcome');
    }
  }
});
