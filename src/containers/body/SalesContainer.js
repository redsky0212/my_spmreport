import React, { Component } from 'react';
import PropTypes from 'prop-types';

// SalesWrapper 컨테이너
import SalesWrapper from 'components/body/SalesWrapper';

const propTypes = {
    
};

const defaultProps = {
    
};

class SalesContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SalesWrapper>
                
            </SalesWrapper>
        );
    }
}

SalesContainer.propTypes = propTypes;
SalesContainer.defaultProps = defaultProps;

export default SalesContainer;