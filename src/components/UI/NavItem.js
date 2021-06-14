import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './NavItem.module.css';

const NavItem = props => {
    return (
        <a
            href={props.url ? props.url : '#'}
            className={classes['nav-element']}
        >
            <i aria-hidden='true'>
                <FontAwesomeIcon
                    className={classes.icons}
                    icon={props.iconName}
                />
            </i>
            {!props.caret ? (
                <span className={classes.label}>{props.label}</span>
            ) : (
                <span className={classes.label}>
                    {props.label}
                    <FontAwesomeIcon icon='caret-down' />
                </span>
            )}
        </a>
    );
};

export default NavItem;
