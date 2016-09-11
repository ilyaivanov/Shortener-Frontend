import React from 'react';
import Shorten from './components/ShortenPage';
import BitlyAPI from './api/BitlyAPI';
import copyToClip from './utils/copyToClipboard';

//statefull container
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.setUrl = this.setUrl.bind(this);
        this.shorten = this.shorten.bind(this);
        this.copyLinkToClipboard = this.copyLinkToClipboard.bind(this);

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

    copyLinkToClipboard() {
        copyToClip(this.state.shortened.url)
    }

    render() {
        return (
            <Shorten onUrlChange={this.setUrl}
                     shorten={this.shorten}
                     shortened={this.state.shortened}
                     copyLinkToClipboard={this.copyLinkToClipboard}
                     isLoading={this.state.isLoading}/>
        );
    }
}