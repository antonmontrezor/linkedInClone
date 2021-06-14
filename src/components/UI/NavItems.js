import classes from './NavItems.module.css';
import styles from './NavItem.module.css';
import NavItem from './NavItem';
import avatar from '../../assets/avatars/meIcon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItems = () => {
    return (
        <div className={classes['nav-elements']}>
            <NavItem
                url={'https://www.linkedin.com/feed/'}
                iconName='home'
                label='Home'
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
            >
                <i aria-hidden='true'>
                    <img src={avatar} alt='' />
                </i>
                <span className={styles.label}>
                    Me <FontAwesomeIcon icon='caret-down' />
                </span>
            </a>
            <NavItem iconName='th' label='Work' caret='caret-down' />
            <a className={styles.label} href='#'>
                Retry Premium Free
            </a>
        </div>
    );
};

export default NavItems;

{
    /* <div className='icon'>
                <i aria-hidden='true'>
                    <FontAwesomeIcon icon='home' />
                </i>
                <span>Home</span>
            </div>
            <div className='icon'>
                <i aria-hidden='true'>
                    <FontAwesomeIcon icon='user-friends' />
                </i>
                <span>My Network</span>
            </div>
            <div className='icon'>
                <i aria-hidden='true'>
                    <FontAwesomeIcon icon='suitcase' />
                </i>
                <span>Jobs</span>
            </div>
            <div className='icon'>
                <i aria-hidden='true'>
                    <FontAwesomeIcon icon='comment-dots' />
                </i>
                <span>Messaging</span>
            </div>
            <div className='icon'>
                <i aria-hidden='true'>
                    <FontAwesomeIcon icon='bell' />
                </i>
                <span>Notifications</span>
            </div>
            <div className='icon'>
                <i aria-hidden='true'>
                    <FontAwesomeIcon icon='th' />
                </i>
                <span>Work</span>
            </div>
            <div className='icon'>
                <i aria-hidden='true'>
                    <img src={avatar} alt='' />
                </i>
                <span>Work</span>
            </div>
            <div className='icon'>
                <i aria-hidden='true'>
                    <FontAwesomeIcon icon='th' />
                </i>
                <span>Work</span>
            </div>
            ; */
}
