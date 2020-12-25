import { createSelector } from 'reselect';

const selectUsers = state => state.users;

export const selectCollections = createSelector(
    [selectUsers],
    users => users.users
);

export const selectCollectionPreview = createSelector(
    [selectCollections],
    users=>users?Object.keys(users).map(key=>users[key]):[]
)