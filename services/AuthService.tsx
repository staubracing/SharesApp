import { Auth } from '@aws-amplify/auth';

export async function signIn(
  username: string,
  password: string,
  // TODO: This error will clear up once we remove the hardcoded password
  newPassword?: string,
) {
  try {
    const user = await Auth.signIn({ username, password });
    // TODO: remove hardcoded password
    const newPassword: string = 'DeuceTail1!';

    if (user && user.challengeName === 'NEW_PASSWORD_REQUIRED' && newPassword) {
      const { requiredAttributes } = user.challengeParam;
      await Auth.completeNewPassword(user, newPassword, requiredAttributes);
    }
    console.log(user);
    return user;
  } catch (e) {
    console.error('error in auth service', e);
  }
}
