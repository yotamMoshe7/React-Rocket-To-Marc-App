import { LOCAL_STORAGE_TIME_LEFT } from './Constants';

export const saveTimeToLocalStorage = (id, time) => {
  let timesArray =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_TIME_LEFT)) || [];
  timesArray[id] = time;
  localStorage.setItem(LOCAL_STORAGE_TIME_LEFT, JSON.stringify(timesArray));
};
