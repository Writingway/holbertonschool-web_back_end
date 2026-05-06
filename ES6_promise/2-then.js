export default function handleResponseFromAPI(promise) {
  promise.then((response, reject) => {
    if (response.status === 200) {
      return {status: 200, body: 'Success'};
    }
    reject(new Error());
  })
  .catch(() => {
    console.log('Got an error from the API');
  });
}