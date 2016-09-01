import Ember from 'ember';

export default Ember.Component.extend({
  firebaseApp: Ember.inject.service(),
  actions: {
    signUp() {
      const auth = this.get('firebaseApp').auth();
      auth.createUserWithEmailAndPassword(this.get('email'), this.get('password'));
      this.set('email', null);
      this.set('password', null);
      this.sendAction('transitionToSignIn');
    }
  }
});
