// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPostsRequest } from '../redux/actions';
// import {
//     selectPosts,
//     selectLoading,
//     selectError,
//     selectPostName
// } from '../redux/selectors';

// const PostsComponent = () => {
//     const dispatch = useDispatch();

//     const posts = useSelector(selectPosts);
//     const loading = useSelector(selectLoading);
//     const error = useSelector(selectError);
//     const postName = useSelector(selectPostName);

//     useEffect(() => {
//         dispatch(fetchPostsRequest());
//     }, [dispatch]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div>
//             <h1>{postName}</h1>
//             <h1>Posts</h1>
//             <button onClick={() => dispatch(fetchPostsRequest())}>
//                 Refresh
//             </button>
//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>
//                         <h3>{post.title}</h3>
//                         <p>{post.body}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default PostsComponent;

// ----------------------------------- using connect -----------------------------------------------------------
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsRequest } from '../redux/actions';
import {
    selectPosts,
    selectLoading,
    selectError,
    selectPostName
} from '../redux/selectors';

const PostsComponent = ({
    posts,
    loading,
    error,
    postName,
    fetchPostsRequest
}) => {
    useEffect(() => {
        fetchPostsRequest(); // no dispatch needed, already mapped
    }, [fetchPostsRequest]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{postName}</h1>
            <h1>Posts</h1>
            <button onClick={fetchPostsRequest}>Refresh</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Map redux state to component props
const mapStateToProps = (state) => ({
    posts: selectPosts(state),
    loading: selectLoading(state),
    error: selectError(state),
    postName: selectPostName(state)
});

// Map dispatch actions to props
const mapDispatchToProps = {
    fetchPostsRequest
};

// Connect and export
export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
