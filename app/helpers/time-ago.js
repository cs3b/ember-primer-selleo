import { helper } from '@ember/component/helper';
import moment from 'moment'; 

export function timeAgo([date]) {
  return moment(date).fromNow();
}

export default helper(timeAgo);
