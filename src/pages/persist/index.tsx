import React, {createRef, FunctionComponent} from 'react';
import {Link} from "react-router-dom";
import {useFruitsStore} from "~/pages/persist/_stores/fruits";

interface OwnProps {
}

type Props = OwnProps;

const PersistPage: FunctionComponent<Props> = (props) => {
    const inputRef = createRef<HTMLInputElement>()
    const fruits = useFruitsStore((state) => state.fruits)
    const {addFruit} = useFruitsStore((state) => state.actions)

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>Persist State on Storage</h1>
            <div>
                <h3>I have {fruits.length} fruits in my basket</h3>
                <p>
                    <input type={"text"}
                           ref={inputRef}
                           placeholder={'Enter fruit....'}
                    />
                    {" "}
                    <button onClick={() => {
                        if (inputRef.current && inputRef.current.value) {
                            addFruit(inputRef.current.value)
                            inputRef.current.value = ""
                        }
                    }}>Add Fruit
                    </button>
                </p>
                {fruits.length > 0 ?
                    <ul>
                        {fruits.map((fruit) => (
                            <li key={fruit}>{fruit}</li>
                        ))}
                    </ul> :
                    <i>No fruits at the moment</i>
                }
            </div>
        </div>
    );
};

export default PersistPage;
