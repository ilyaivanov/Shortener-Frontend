import React from 'react';
import Shorten from './components/ShortenPage';
import BitlyAPI from './api/BitlyAPI';
import copyToClip from './utils/copyToClipboard';
import {NotificationStack} from 'react-notification';
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
            history: [],
            notifications: [],
            notificationId: 1
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
        this.addNotification(`${shortened.url} copied to clipboard`);
    }

    addNotification(message) {
        const newCount = this.state.notificationId + 1;
        return this.setState({
            notifications: this.state.notifications.concat([{
                message,
                key: newCount,
                className: "shortened-notification",
                action: 'Dismiss',
                onClick: () => this.removeNotification(newCount),
                dismissAfter: 7000
            }]),
            notificationId: newCount
        });
    }

    removeNotification(count) {
        this.setState({
            notifications: this.state.notifications.filter(n => n.key !== count)
        })
    }

    render() {
        console.log(this.state.notifications);
        return (
            <div>
                <div className="bootstrap-context">
                    <Shorten onUrlChange={this.setUrl}
                             shorten={this.shorten}
                             shortened={this.state.shortened}
                             copyLinkToClipboard={this.copyLinkToClipboard}
                             isLoading={this.state.isLoading}
                             history={this.state.history}/>
                </div>
                <NotificationStack
                    notifications={this.state.notifications}
                    onDismiss={notification => this.setState({
                        notifications: this.state.notifications.splice(1, this.state.notifications.length)
                    })}
                />
            </div>
        );
    }
}