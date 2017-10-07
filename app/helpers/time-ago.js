import Ember from 'ember';
import moment from 'moment'; 

export function timeAgo([date]) {
  return moment(date).fromNow();
}

export default Ember.Helper.helper(timeAgo);
