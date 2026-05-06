import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return Promise.all([uploadPhoto(filename), signUpUser(firstName, lastName)])
    .then((response) => {
      const [photo, user] = response;
      return [
        {
          status: Promise.status,
          value: photo,
        },
        {
          status: Promise.status,
          value: user,
        },
      ];
    })
}