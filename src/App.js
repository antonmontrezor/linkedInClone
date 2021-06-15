import ReactDOM from 'react-dom';
// components
import Header from './components/Layout/Header';

//styles
import './helpers/setup.css';

// libraries
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faUserFriends,
    faSuitcase,
    faCommentDots,
    faBell,
    faTh,
    faCaretDown,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Profile from './components/User/Profile/Profile';
library.add(
    fab,
    faHome,
    faUserFriends,
    faSuitcase,
    faCommentDots,
    faBell,
    faTh,
    faCaretDown,
    faSearch
);

function App() {
    return <Header />;
}

export default App;
