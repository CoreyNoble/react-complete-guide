import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxillary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                <NavigationItem link="/" exact>Burger Builder</NavigationItem>
                {props.isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
                {!props.isAuth
                    ? <NavigationItem link="/auth">Sign In</NavigationItem>
                    : <NavigationItem link="/logout">Logout</NavigationItem>}
                </nav>
            </div>
        </Auxillary>
    );
};

export default sideDrawer;