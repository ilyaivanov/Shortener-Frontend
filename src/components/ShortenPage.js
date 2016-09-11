import React from 'react';
import {Form, FormControl, ControlLabel, FormGroup, Button} from 'react-bootstrap';

export default class ShortenPage extends React.Component {
    render() {
        return <div className="container">
            <h1>Shorten</h1>
            <Form>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Url</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="https://example.com/very/long/link/indeed"/>
                </FormGroup>
                <Button type="submit">
                    Shorten
                </Button>
            </Form>
        </div>
    }
}

