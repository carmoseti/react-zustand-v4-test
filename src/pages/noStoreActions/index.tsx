import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";
import {decrement, increment, useInDecrementStore} from "~/pages/noStoreActions/_stores/indecrement";

interface OwnProps {
}

type Props = OwnProps;

const NoStoreActionsPage: FunctionComponent<Props> = (props) => {
    const value = useInDecrementStore((state) => state.value)

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>No store actions</h1>
            <div>
                <button title={"Decrement"} onClick={decrement}>-</button>
                {" "}
                <input type={"number"} readOnly={true} value={value}/>
                {" "}
                <button title={"Increment"} onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default NoStoreActionsPage;
