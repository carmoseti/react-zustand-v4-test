import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";
import {useFishesStore} from "~/pages/urlHashStorage/_storage/fishes";

interface OwnProps {
}

type Props = OwnProps;

const URLHashStoragePage: FunctionComponent<Props> = (props) => {
    const fishes = useFishesStore((state) => state.fishes)
    const addAFish = useFishesStore((state) => state.addAFish)

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>URL Hash Storage</h1>
            <div>
                <h3>{fishes} fishes.</h3>
                <button onClick={addAFish}>Add a fish!</button>
            </div>
        </div>
    );
};

export default URLHashStoragePage;
