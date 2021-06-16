import classes from './Profile.module.css';
import avatar from '../../../assets/avatars/meIcon.jpg';
import Button from '../../UI/Button';

const Profile = props => {
    return (
        <section className={classes.profile}>
            <h2 className='sr-only'>Profile</h2>
            <div className={classes.heading}>
                <img src={avatar} alt='Profile picture' />
                <div className={classes['user-credentials']}>
                    <p className={classes.name}>Anton Montrezor</p>
                    <p className={classes.title}>Software Engineer</p>
                </div>
                <Button action='View Profile' />
            </div>
            <ul className={classes.account}>
                Account
                <li>Settings & Privacy</li>
                <li>Help</li>
                <li>Language</li>
            </ul>
            <ul className={classes.manage}>
                Manage
                <li>Posts & Activity</li>
                <li>Job Posting Account</li>
                <li>
                    <a
                        onClick={props.onClose}
                        className={classes['sign-out']}
                        href='#'
                    >
                        Sign Out
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Profile;
