import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <div className='container'>
                <div className='groupbox'>
                    
                </div>
                <div className='chartArea'>
                    <div className='left'>
                        <div className='upper'>
                            
                        </div>
                        <div className='downer'>
                            
                        </div>
                    </div>
                    <div className='right'>
                        <div className='upper'>
                            
                        </div>
                        <div className='downer'>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SalesContainer.propTypes = propTypes;
SalesContainer.defaultProps = defaultProps;

export default SalesContainer;