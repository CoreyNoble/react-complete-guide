import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../Auxillary/Auxillary';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <Auxillary>
                <Modal
                    show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Auxillary>
        );
    }
}

export default withErrorHandler;