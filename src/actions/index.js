import jsonPlaceholder from '../apis/jsonPlacehoder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    new Set(getState().posts.map(post => post.userId))
    .forEach(userId => dispatch(fetchUser(userId)));
};

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data,
    });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data,
    });
};
