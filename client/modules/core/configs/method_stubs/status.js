import {check} from 'meteor/check';
export default function ({Meteor, Collections}) {
  Meteor.methods({
    'status.create'(_id, user, statusnews) {

      check(_id, String);
      check(status, String);
      const createdAt = new Date();
      const status = {
        _id, user, statusnews, createdAt,
        saving: true
      };
    //  alert('Call posts.create method from config: before inserting');

      Collections.Status.insert(status);

    //  alert('Call posts.create method from config: after inserting');
    }
  });
}
