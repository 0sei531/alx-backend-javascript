import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the profile signup process asynchronously.
 * @param {string} firstName - The first name of the user to sign up.
 * @param {string} lastName - The last name of the user to sign up.
 * @param {string} fileName - The name of the file to upload as a photo.
 * @returns {Promise<Array>} A promise resolving to an array of objects representing the settled promises.
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = await signUpUser(firstName, lastName);
    const photo = await uploadPhoto(fileName);
    return [
      { status: 'fulfilled', value: user },
      { status: 'fulfilled', value: photo }
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: `${error.name}: ${error.message}` },
      { status: 'rejected', value: `${error.name}: ${error.message}` }
    ];
  }
}

