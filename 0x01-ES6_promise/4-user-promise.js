export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
      reject(new Error('Invalid input: First and Last name must be strings'));
    } else {
      resolve({
        firstName,
        lastName,
      });
    }
  });
}

