import StatusList from '../components/statuslist.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('status.list').ready()) {

    const status = Collections.Status.find().fetch();
    onData(null, {status});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(StatusList);
