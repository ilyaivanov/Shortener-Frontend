import React, {PropTypes} from 'react';
import {Form, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';

let shorten = props =>
    (<div className="container">
        <h1>Shortener</h1>

        <Form>
            <FormGroup controlId="formInlineName">
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

shorten.propTypes = {
    shorten: PropTypes.func.isRequired,
    onUrlChange: PropTypes.func.isRequired
};

export default shorten;

