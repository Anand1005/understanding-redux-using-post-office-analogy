import { useDispatch, useSelector } from 'react-redux';
import { setPostName } from '../redux/actions';
import { selectPostName } from '../redux/selectors';

const PostName = () => {
    const dispatch = useDispatch();
    const postName = useSelector(selectPostName); // get the current postName from redux

    const handleChange = (e) => {
        const newName = e.target.value;
        dispatch(setPostName(newName)); // Dispatch name on every keystroke
    };

    return (
        <div>
            <input
                type="text"
                value={postName} // controlled by Redux store
                onChange={handleChange}
                placeholder="Enter your name"
            />
        </div>
    );
};

export default PostName;
