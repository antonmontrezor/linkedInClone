import { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './NavItems.module.css';
import styles from './NavItem.module.css';
import NavItem from './NavItem';
import avatar from '../../../assets/avatars/meIcon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../../User/Profile/Profile';

const NavItems = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuStateHandler = () => {
        if (isMenuOpen) setIsMenuOpen(false);
        else setIsMenuOpen(true);
    };

    return (
        <div className={classes['nav-elements']}>
            <NavItem
                url={'https://www.linkedin.com/feed/'}
                iconName='home'
                label='Home'
                className={styles.target}
            />
            <NavItem
                url={'https://www.linkedin.com/mynetwork/'}
                iconName='user-friends'
                label='My Network'
            />
            <NavItem
                url={'https://www.linkedin.com/jobs/'}
                iconName='suitcase'
                label='Jobs'
            />
            <NavItem
                url={'https://www.linkedin.com/messaging/'}
                iconName='comment-dots'
                label='Messaging'
            />
            <NavItem
                url={'https://www.linkedin.com/notifications/'}
                iconName='bell'
                label='Notifications'
            />
            <a
                className={`${classes['nav-el-icon']} ${styles['nav-element']}`}
                href='#'
                onClick={menuStateHandler}
            >
                <i aria-hidden='true'>
                    <img src={avatar} alt='' />
                </i>
                <span className={styles.label}>
                    Me{' '}
                    <FontAwesomeIcon
                        icon='caret-down'
                        className={styles.caret}
                    />
                </span>
            </a>
            {isMenuOpen &&
                ReactDOM.createPortal(
                    <Profile onClose={menuStateHandler} />,
                    document.getElementById('main-nav')
                )}
            <NavItem iconName='th' label='Work' caret='caret-down' />
            <a className={`${styles.label} ${classes.ad}`} href='#'>
                Retry Premium Free
            </a>
        </div>
    );
};

export default NavItems;
