import React, { Component } from 'react';
import classes from './Layout.css';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHander = () => {
        this.setState((prevState) => {
            return{ showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render () {
        return (
            <Auxillary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHander}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxillary>
        );
    }
}

export default Layout;