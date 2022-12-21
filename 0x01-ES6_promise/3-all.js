import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const p = Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      const fname = data[1].firstName;
      const lname = data[1].lastName;
      const bd = data[0].body;
      console.log(`${bd} ${fname} ${lname}`);
    })
    .catch(() => { console.log('Signup system offline'); });
  return p;
}
