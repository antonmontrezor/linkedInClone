import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavItems from './MainNavigation/NavItems';
import Wrapper from '../UI/Wrapper';

const Header = () => {
    return (
        <header className={classes.header}>
            <Wrapper>
                <nav className={classes['main-nav']} id='main-nav'>
                    <div className={classes['nav-search']}>
                        <a
                            className={classes.icon}
                            href='https://www.linkedin.com/feed/'
                        >
                            <i aria-hidden='true'>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </i>
                            <span className='sr-only'>LinkedIn logo</span>
                        </a>
                        <label htmlFor='search-bar' className='sr-only'>
                            Search bar
                        </label>
                        <FontAwesomeIcon
                            icon='search'
                            className={classes['search-icon']}
                        />
                        <input
                            type='search'
                            id='search-bar'
                            name='search'
                            placeholder='Search'
                        />
                    </div>
                    <NavItems />
                </nav>
            </Wrapper>
        </header>
    );
};

export default Header;
