import Status from '../components/status.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, statusId}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('status.single', statusId).ready()) {
  //  alert('1');
    const status = Collections.Status.findOne(statusId);
    onData(null, {status});
  } else {
  //  alert(postId);
    const status = Collections.Posts.findOne(statusId);
    if (status) {
      onData(null, {status});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Status);
