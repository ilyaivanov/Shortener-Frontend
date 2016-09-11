import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <IndexLink to="/">Search</IndexLink>
                {' | '}
                <Link to="/about">About</Link>
                <br/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

