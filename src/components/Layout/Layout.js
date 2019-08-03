import React from 'react';
import classes from './Layout.css';
import Auxillary from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxillary>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;