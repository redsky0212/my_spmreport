import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    
};

const defaultProps = {
    
};

class FooterContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="copy">
                    <div className="footer">Copyright &copy; 2019 By <strong>SKTelecom</strong> Co, Ltd. All Rights Reserved.</div>
                </div>
            </footer>
        );
    }
}

FooterContainer.propTypes = propTypes;
FooterContainer.defaultProps = defaultProps;

export default FooterContainer;