import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+- save action in friends route');
      return false;
    },
    cancel: function() {
      console.log("+- cancel action in friends route");
      return true;
    }
  }
});
