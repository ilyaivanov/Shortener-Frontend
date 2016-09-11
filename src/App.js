import React, {PropTypes} from 'react';
import Shorten from './components/ShortenPage';

export default class App extends React.Component {
    //statefull container

    constructor(props){
        super(props);

        this.setUrl = this.setUrl.bind(this);
        this.shorten = this.shorten.bind(this);
    }

    setUrl(url){
        this.setState({url});
    }

    shorten(){
        console.log('shortening', this.state.url);
    }

    render() {
        return (
            <div>
                <Shorten onUrlChange={this.setUrl} shorten={this.shorten}/>
            </div>
        );
    }
}