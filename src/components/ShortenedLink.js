import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';


let shortened = props => {
    let link = props.shortened ? props.shortened.url : "";

    return (<div>
        <a href={link}>{link}</a>
        <Button onClick={props.copyLinkToClipboard} bsSize="xsmall">copy</Button>
    </div>);

};

shortened.propTypes = {
    copyLinkToClipboard: PropTypes.func.isRequired,
    shortened: PropTypes.object
};

export default shortened;