// src/App.js

import { Provider } from 'react-redux';
import PostsComponent from './components/PostsComponent';
import store from './redux/store';
import PostName from './components/PostName';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <PostName />
                <PostsComponent />
            </div>
        </Provider>
    );
}

export default App;
