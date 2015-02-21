import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  isValid: Ember.computed.and(
    'hasDescription'
  ),
  actions: {
    save: function() {
      if (!this.get('isValid')) {
        this.set('errorMessage', "You have to supply a description");
        return false;
      }
      return true;
    }
  }
});
