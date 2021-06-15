import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavItems from '../UI/NavItems';
import Wrapper from '../UI/Wrapper';

const Header = () => {
    return (
        <header className={classes.header}>
            <Wrapper>
                <nav className={classes['main-nav']}>
                    <div className={classes['nav-search']}>
                        <div className={classes.icon}>
                            <i aria-hidden='true'>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </i>
                            <span className='sr-only'>LinkedIn logo</span>
                        </div>
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
