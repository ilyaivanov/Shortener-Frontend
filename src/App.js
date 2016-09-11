import React, {PropTypes} from 'react';
import Shorten from './components/ShortenPage';
import BitlyAPI from './api/BitlyAPI';

export default class App extends React.Component {
    //statefull container

    constructor(props) {
        super(props);

        this.setUrl = this.setUrl.bind(this);
        this.shorten = this.shorten.bind(this);

        //set initial state, otherwise null
        this.state = {
            url: "",
            isLoading: false
        }
    }

    setUrl(url) {
        this.setState({url});
    }

    shorten() {
        this.setState({isLoading: true});
        var service = new BitlyAPI();
        service.shorten(this.state.url)
            .then(shortened => {
                this.setState({
                    isLoading: false,
                    shortened
                });
            });
    }

    render() {
        return (
            <div>
                <Shorten onUrlChange={this.setUrl}
                         shorten={this.shorten}
                         shortened={this.state.shortened}
                         isLoading={this.state.isLoading}/>
            </div>
        );
    }
}