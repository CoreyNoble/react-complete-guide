import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

const burgerIngredient = props => {
    let ingredient = null;

    switch (props.type) {
        case ( 'bread-bottom' ):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ( 'bread-top' ):
            ingredient = (
                <div className={classes.BreadTop}></div>
            );
            break;
        case ( 'patty' ):
            ingredient = <div className={classes.Patty}></div>;
            break;
        case ( 'cheese' ):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ( 'bacon' ):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        case ( 'lettuce' ):
            ingredient = <div className={classes.Lettuce}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
}

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;