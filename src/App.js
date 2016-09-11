import React, {PropTypes} from 'react';
import Shorten from './components/ShortenPage';

export default class App extends React.Component {
    //statefull container

    constructor(props) {
        super(props);

        this.setUrl = this.setUrl.bind(this);
        this.shorten = this.shorten.bind(this);

        //set initial state, otherwise null
        this.state = {
            url: ""
        }
    }

    setUrl(url) {
        this.setState({url});
    }

    shorten() {
        var shortened = {
            longUrl: this.state.url,
            shortUrl: 'http://www.google.com',
        };
        this.setState({shortened});
    }

    render() {
        return (
            <div>
                <Shorten onUrlChange={this.setUrl}
                         shorten={this.shorten}
                         shortened={this.state.shortened}/>
            </div>
        );
    }
}