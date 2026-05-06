import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [photo, user] = response;
      console.log(`${photo.status} ${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}