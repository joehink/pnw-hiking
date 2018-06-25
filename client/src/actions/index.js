export * from './userActions';
export * from './discoverActions';
export * from './favoriteTrailsActions';
export * from './completedTrailsActions';

import { USER_START_FETCHING } from './types';

export const fetchingUserTrailData = () => {
    return { type: USER_START_FETCHING }
}