import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const HomePage: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <h1>Zustand v4 Tests</h1>
            <ul>
                <li>
                    <Link to={'basic'}>Basic</Link>
                </li>
                <li>
                    <Link to={'persist'}>Persist</Link>
                </li>
                <li>
                    <Link to={'autoSelectors'}>Auto(Generated) Selectors</Link>
                </li>
                <li>
                    <Link to={'noStoreActions'}>No Store Actions</Link>
                </li>
                <li>
                    <Link to={'urlHashStorage'}>URL Hash Storage</Link>
                </li>
                <li>
                    <Link to={'resetInitial'}>Reset Initial State</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;
