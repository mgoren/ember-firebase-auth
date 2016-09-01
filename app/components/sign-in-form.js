import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signIn(provider) {
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        console.log("logged in!");
      }, (error) => {
        console.log(error);
      });
      this.sendAction('transitionToWelcome');
    }
  }
});
