import React, {PropTypes} from 'react';
import Shortened from './ShortenedLink';
import History from './History';
import {Collapse, Form, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';

let shorten = props => {


    return (<div className="container">
        <h1>Shortener</h1>

        <Collapse in={props.isLoading}>
            <div><b>Loading...</b></div>
        </Collapse>

        <Collapse in={!!props.shortened}>
            <div className="recent-panel"><Shortened copyLinkToClipboard={props.copyLinkToClipboard}
                            shortened={props.shortened}/>
            </div>
        </Collapse>

        <Form>
            <FormGroup>
                <ControlLabel>Url</ControlLabel>
                <FormControl onChange={e => props.onUrlChange(e.target.value)}
                             type="text"
                             placeholder="https://example.com/very/long/link/indeed"/>
            </FormGroup>
            <Button onClick={props.shorten}>
                Shorten
            </Button>
        </Form>
        <History history={props.history}
                 copyLinkToClipboard={props.copyLinkToClipboard}/>
    </div>);
};
shorten.propTypes = {
    shorten: PropTypes.func.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    copyLinkToClipboard: PropTypes.func.isRequired,
    shortened: PropTypes.object,
    history: PropTypes.array,
    isLoading: PropTypes.bool.isRequired
};

export default shorten;

