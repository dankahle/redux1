
export interface IEpicState {
  userName?: string,
  fetching?: boolean,
  data?: object
  fetchedUser?: string
};

export const EPIC_INITIAL_STATE = {
  fetching: false
};

