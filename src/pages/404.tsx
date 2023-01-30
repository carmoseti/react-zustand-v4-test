import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const _404Page: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <h1>
                NOT found
            </h1>
            <div>
                Requested path NOT found
            </div>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default _404Page;
