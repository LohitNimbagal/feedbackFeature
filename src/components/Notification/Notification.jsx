import React, { useEffect } from 'react';
import './index.css';

export const Notification = ({ openCard }) => {

    let notificationMsg;

    switch (openCard) {
        case 'Report an Issue':
            notificationMsg = "Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!";
            break;
        case 'Share Feedback':
            notificationMsg = "Thanks for your valuable feedback!";
            break;
        case 'Give Suggestion':
            notificationMsg = "Thanks for your valuable Suggestion!";
            break;
        case 'Contact Us':
            notificationMsg = "Thanks for reaching out to us! We will get back to you as soon as possible";
            break;
        default:
            notificationMsg = null;
            break;
    }

    return (
        <div className="box arrow-bottom">
            {notificationMsg}
        </div>
    );
};
