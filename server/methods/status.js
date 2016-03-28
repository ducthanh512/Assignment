import {Status} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.methods({
    'status.create'(_id, user, statusnews) {
      check(_id, String);
      check(user, String);
      check(statusnews, String);


      // Demo the latency compensations (Delete this in production)
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const status = {_id, user, createdAt, statusnews, createdAt};
      Status.insert(status);
    }
  });

}
