import {Posts} from '/lib/collections';
import {Status} from '/lib/collections';
export default function () {
  if (!Posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      Posts.insert({title, content});
    }
  }
}


export default function () {
  if (!Status.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const createdAt = new Date();
      const user = `test:${lc}@email.com `;
      const date = createdAt;
      const status = `Number ${lc} is great!`;
      Status.insert({user, date,status});
    }
  }
}
