import React, {PropTypes} from 'react';
import Shorten from './components/ShortenPage';

export default class App extends React.Component {

    //statefull container

    render() {
        return (
            <div>
                <Shorten />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

