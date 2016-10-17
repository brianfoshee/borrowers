import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      Ember.Logger.info("save action in friends new controller");

      this.transitionToRoute('friends.show', model);
    },
    cancel() {
      Ember.Logger.info("save action in friends new controller");
    }
  }
});
