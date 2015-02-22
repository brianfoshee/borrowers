import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },
  deactivate: function(){
    var model = this.modelFor('friends/new');

    // if this hasen't been saved to the backend, destroy it
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }
});
