import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <button onClick={() => this.props.onAddPerson(this.props.addPsn)}>Add Person</button>
    </div>
);

const mapStateToProps = state => {
    return {
        addPsn: state.add.persons,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (result) => dispatch({type: actionTypes.ADD_PERSON, result: result}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addPerson);