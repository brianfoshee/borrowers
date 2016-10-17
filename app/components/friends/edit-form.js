import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstname',
    'model.lastName',
    'model.twitter',
    {
      get() {
        return !Ember.isEmpty(this.get('model.email')) &&
          !Ember.isEmpty(this.get('model.firstName')) &&
          !Ember.isEmpty(this.get('model.lastName')) &&
          !Ember.isEmpty(this.get('model.twitter'));
      }
    }
  ),
  actions: {
    save() {
      Ember.Logger.info("save action in edit-form component");
      // calls the save action on the model itself
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          // if the http request is successful,
          // call the save action passed to the component
          return this.save(friend);
        }, () => {
          this.set('errorMessage', 'there was something wrong saving the model');
        });
      } else {
        this.set('errorMessage', 'You have to fill in all the fields');
      }
    },
    cancel() {
      Ember.Logger.info("save action in edit-form component");
      // calls the cancel action passed into the component
      this.cancel(this.get('model'));
    }
  }
});
