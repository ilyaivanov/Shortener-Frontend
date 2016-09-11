import React, {PropTypes} from 'react';
import Shortened from './ShortenedLink';
import {Collapse, Form, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';

let shorten = props => {


    return (<div className="container">
        <h1>Shortener</h1>

        <Collapse in={props.isLoading}>
            <div><b>Loading...</b></div>
        </Collapse>

        <Collapse in={!!props.shortened}>
            <div><Shortened copyLinkToClipboard={props.copyLinkToClipboard}
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
    </div>);
};
shorten.propTypes = {
    shorten: PropTypes.func.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    copyLinkToClipboard: PropTypes.func.isRequired,
    shortened: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
};

export default shorten;

