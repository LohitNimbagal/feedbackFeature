import React from 'react';
import { IssueCard } from './IssueCard';
import { FeedbackCard } from './FeedbackCard';
import { SuggestionCard } from './SuggestionCard';
import { ContactCard } from './ContactCard';

export const CardComp = ({ loggedIn, openCard, handelSubmit }) => {
    let cardComponent;

    switch (openCard) {
        case 'Report an Issue':
            cardComponent = <IssueCard loggedIn={loggedIn} handelSubmit={handelSubmit}/>;
            break;
        case 'Share Feedback':
            cardComponent = <FeedbackCard loggedIn={loggedIn} handelSubmit={handelSubmit}/>;
            break;
        case 'Give Suggestion':
            cardComponent = <SuggestionCard loggedIn={loggedIn} handelSubmit={handelSubmit}/>;
            break;
        case 'Contact Us':
            cardComponent = <ContactCard loggedIn={loggedIn} handelSubmit={handelSubmit}/>;
            break;
        default:
            cardComponent = null;
    }

    return (
        <div>
            {cardComponent}
        </div>
    );
};
