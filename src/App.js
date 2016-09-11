import React from 'react';
import Shorten from './components/ShortenPage';
import BitlyAPI from './api/BitlyAPI';
import copyToClip from './utils/copyToClipboard';
import {Notification} from 'react-notification';
import formatDate from './utils/dateUtils';

//statefull container
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.setUrl = this.setUrl.bind(this);
        this.shorten = this.shorten.bind(this);
        this.copyLinkToClipboard = this.copyLinkToClipboard.bind(this);

        //set initial state, otherwise null
        let createItem = (long_url, url, date) => ({
            long_url, url, date
        });
        this.state = {
            url: '',
            isLoading: false,
            isNotificationActive: false,
            message: '',
            history: []
        };
    }

    setUrl(url) {
        this.setState({url});
    }

    shorten() {
        this.setState({isLoading: true});

        let service = new BitlyAPI();
        service.shorten(this.state.url)
            .then(shortened => {
                shortened.date = formatDate(new Date());
                this.setState({
                    isLoading: false,
                    shortened,
                    history: this.state.history.concat([shortened])
                });
            });
    }

    copyLinkToClipboard(shortened) {
        copyToClip(shortened.url);
        let message = `${shortened.url} copied to clipboard`;
        this.setState({isNotificationActive: true, message});
        setTimeout(() => this.setState({isNotificationActive: false}), 3000);
    }

    render() {
        return (
            <div>
                <Shorten onUrlChange={this.setUrl}
                         shorten={this.shorten}
                         shortened={this.state.shortened}
                         copyLinkToClipboard={this.copyLinkToClipboard}
                         isLoading={this.state.isLoading}
                         history={this.state.history}/>
                <Notification
                    isActive={this.state.isNotificationActive}
                    message={this.state.message}
                />
            </div>
        );
    }
}