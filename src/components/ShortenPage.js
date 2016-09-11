import React, {PropTypes} from 'react';
import {Collapse, Form, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';
let shorten = props => {

    var link = props.shortened ? props.shortened.url : "";

    return (<div className="container">
        <h1>Shortener</h1>

        <Collapse in={props.isLoading}>
            <div><b>Loading...</b></div>
        </Collapse>

        <Collapse in={!!props.shortened}>
            <div><a href={link}>{link}</a> <Button bsSize="xsmall">copy</Button></div>
        </Collapse>

        <br/>
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
}
shorten.propTypes = {
    shorten: PropTypes.func.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    shortened: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
};

export default shorten;

