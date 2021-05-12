import Storage from "./Storage";

export function getDeviceId() {
  return 'Test Device';
}

export async function getApiToken() {
  return await Storage.get('accessToken');
}

export async function setApiToken(token) {
  return await Storage.set('accessToken', token);
}

export async function getAuthUser() {
  return await Storage.get('user');
}

export async function setAuthUser(user) {
  return await Storage.set('user', user);
}

export async function removeAuthUser() {
  return await Storage.remove('user');
}

export async function removeApiToken() {
  return await Storage.remove('accessToken');
}