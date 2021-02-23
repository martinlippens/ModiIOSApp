import store from "../../store";
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
  await Storage.get('user'); 
}

export async function setAuthUser(user) {
  await Storage.set('user', user); 
  store.dispatch({
     type: 'info_store',
      value: user
  });
}