import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+- save action in application route');
      return true;
    },
    cancel: function() {
      console.log("+- cancel action in application route");
      return true;
    }
  }
});
