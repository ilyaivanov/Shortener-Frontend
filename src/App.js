import React from 'react';
import LocalStorageMixin from 'react-localstorage';
import reactMixin from 'react-mixin';
import History from './components/History';
import {NotificationStack} from 'react-notification';
import copyToClip from './utils/copyToClipboard';
import formatDate from './utils/dateUtils';
import isUrlValid from './utils/validateUrl';
import shorteningService from './api/shorteningService';
import Shorten from './components/ShortenPage';


//statefull container
class App extends React.Component {
    constructor(props) {
        super(props);

        this.setUrl = this.setUrl.bind(this);
        this.shorten = this.shorten.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
        this.removeNotification = this.removeNotification.bind(this);
        this.copyLinkToClipboard = this.copyLinkToClipboard.bind(this);

        //set initial state, otherwise null
        this.state = {
            url: '',
            isLoading: false,
            message: '',
            history: [],
            notifications: [],
            newNotificationId: 1
        };
    }

    setUrl(url) {
        this.setState({url});
    }

    shorten() {
        if (!isUrlValid(this.state.url)) {
            this.addNotification('URL is invalid', true);
            return;
        }
        this.setState({isLoading: true});

        shorteningService(this.state.url)
            .then(shortened => {
                    shortened.date = formatDate(new Date());
                    this.setState({
                        shortened,
                        history: this.state.history.concat([shortened])
                    });
                },
                errorMessage => {
                    this.setState({shortened: null});
                    this.addNotification(errorMessage, true);
                }
            )
            .then(() => this.setState({isLoading: false}));
    }

    copyLinkToClipboard(shortened) {
        copyToClip(shortened.shorten_url);
        this.addNotification(`${shortened.shorten_url} copied to clipboard`);
    }

    addNotification(message, isError) {
        const newCount = this.state.newNotificationId + 1;
        return this.setState({
            notifications: this.state.notifications.concat([{
                message,
                key: newCount,
                className: isError ? "error-notification" : "",
                action: 'Dismiss',
                onClick: () => this.removeNotification(newCount),
                dismissAfter: 4000
            }]),
            newNotificationId: newCount
        });
    }

    clearHistory() {
        this.setState({history: []});
    }

    removeNotification(id) {
        this.setState({notifications: this.state.notifications.filter(n => n.key !== id)});
    }

    render() {
        return (
            <div>
                <div className="bootstrap-context">
                    <div className="container">
                        <Shorten onUrlChange={this.setUrl}
                                 shorten={this.shorten}
                                 shortened={this.state.shortened}
                                 copyLinkToClipboard={this.copyLinkToClipboard}
                                 isLoading={this.state.isLoading}/>

                        <History history={this.state.history}
                                 copyLinkToClipboard={this.copyLinkToClipboard}
                                 clearHistory={this.clearHistory}/>

                    </div>
                </div>

                <NotificationStack
                    notifications={this.state.notifications}
                    onDismiss={notification => this.removeNotification(notification.key)}
                />
            </div>
        );
    }
}

reactMixin(App.prototype, LocalStorageMixin);

export default App;
