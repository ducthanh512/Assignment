import {Status} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('status.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, user: 1, status: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Status.find(selector, options);
  });

  Meteor.publish('status.single', function (statusId) {
    check(postId, String);
    const selector = {_id: statusId};
    return Status.find(selector);
  });

}
