import {Posts, Comments, Status} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('posts.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Posts.find(selector, options);
  });

  Meteor.publish('posts.single', function (postId) {
    check(postId, String);
    const selector = {_id: postId};
    return Posts.find(selector);
  });

  Meteor.publish('posts.comments', function (postId) {
    check(postId, String);
    const selector = {postId};
    return Comments.find(selector);
  });


  Meteor.publish('status.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, user: 1, date:1, status: 1},
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
