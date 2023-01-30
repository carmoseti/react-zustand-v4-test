import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";
import {useBearStoreActions, useBearStoreBearsValue, useBearStoreFishValue} from "~/pages/basic/_stores/bear";

interface OwnProps {
}

type Props = OwnProps;

const BasicPage: FunctionComponent<Props> = (props) => {
    /*const {bears, fish} = useBearStore((state) => ({
        bears: state.bears,
        fish: state.fish,
    }), shallow)*/

    const bears = useBearStoreBearsValue()
    const fish = useBearStoreFishValue()
    const {increasePopulation, removeAllBears, eatFish} = useBearStoreActions()

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>Basic</h1>
            <div>
                <h3>{bears} bears around here. {fish} fish around here</h3>
                <p>
                    <button onClick={increasePopulation}>Add a bear</button>
                    {" "}
                    <button onClick={removeAllBears}>Remove all bears</button>
                    {" "}
                    <button onClick={eatFish}>Eat a fish</button>
                </p>
            </div>
        </div>
    );
};

export default BasicPage;