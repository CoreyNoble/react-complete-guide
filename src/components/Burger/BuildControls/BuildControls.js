import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
// import Button from '../../UI/Button/Button';

const controls = [
    { label: 'Patty', type: 'patty' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'Order now' : 'Sign in to order'}</button>
    </div>
);

export default buildControls;