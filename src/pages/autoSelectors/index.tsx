import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";
import {useVotesStore} from "~/pages/autoSelectors/_stores/votes";

interface OwnProps {
}

type Props = OwnProps;

const AutoSelectorsPage: FunctionComponent<Props> = (props) => {
    const votes = useVotesStore.use.votes()
    const castVote = useVotesStore.use.actions().castVote

    return (
        <div>
            <ul>
                <li>
                    <Link to={".."}>Back</Link>
                </li>
            </ul>
            <h1>Generated Selectors</h1>
            <div>
                <h3>{votes} votes cast</h3>
                <button onClick={castVote}>Cast Vote!</button>
            </div>
        </div>
    );
};

export default AutoSelectorsPage;
