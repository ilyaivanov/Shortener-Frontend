import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';


let shortened = props => {
    let link = props.shortened ? props.shortened.url : "";
    let date = props.shortened ? props.shortened.date : "";

    return (<div>
        <a href={link}>{link}</a>
        <Button className="copy-button" onClick={() => props.copyLinkToClipboard(props.shortened)} bsSize="xsmall">copy</Button>
        <small className="pull-right">{date}</small>
    </div>);

};

shortened.propTypes = {
    copyLinkToClipboard: PropTypes.func.isRequired,
    shortened: PropTypes.object
};

export default shortened;