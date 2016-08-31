import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signIn(provider) {
      let component = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        component.set('email', null);
        component.set('password', null);
        console.log("logged in!");
      }, (error) => {
        console.log(error);
      });
    }
  }
});
