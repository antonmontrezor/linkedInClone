import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './NavItem.module.css';

const NavItem = props => {
    console.log('rendering a single navigation item');
    return (
        <a
            href={props.url ? props.url : '#'}
            className={
                props.className
                    ? `${classes['nav-element']} ${classes.target}`
                    : classes['nav-element']
            }
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
                    <FontAwesomeIcon
                        icon='caret-down'
                        className={classes.caret}
                    />
                </span>
            )}
        </a>
    );
};

//wrapping a component with React.memo() to make sure that the component which values is not changed after it mount is saved in the memory and rendered once despite its parent being re-rendered;  a cost of react comparing props vs react comparing components should be considered
export default React.memo(NavItem);
