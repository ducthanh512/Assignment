export default {
  create({Meteor, LocalState, FlowRouter}, status) {
    if (!status) {
      return LocalState.set('SAVING_ERROR', 'Status are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
  //  alert('export default from action.posts: before calling');
    Meteor.call('status.create', id,Meteor.user().emails[0].address,status, (err) => {
      alert(err.message);
      if (err) {

        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
  //  alert('export default from action.posts');
    FlowRouter.go(`/`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
