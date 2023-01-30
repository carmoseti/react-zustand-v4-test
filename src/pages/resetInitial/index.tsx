import React, {createRef, FunctionComponent} from 'react';
import {Link} from "react-router-dom";
import {useSeaFishStore} from "~/pages/resetInitial/_stores/seafish";

interface OwnProps {
}

type Props = OwnProps;

const ResetInitialPage: FunctionComponent<Props> = (props) => {
    const salmonInputRef = createRef<HTMLInputElement>()
    const tunaInputRef = createRef<HTMLInputElement>()

    const salmon = useSeaFishStore((state) => state.salmon)
    const tuna = useSeaFishStore((state) => state.tuna)
    const {addSalmon, addTuna, reset} = useSeaFishStore((state) => ({
        addSalmon: state.addSalmon,
        addTuna: state.addTuna,
        reset: state.reset
    }))

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>
                Reset to Initial State{" "}
                <button onClick={reset}>Reset All</button>
            </h1>
            <div>
                <h3>{salmon} salmon available</h3>
                <input type={"number"} min={1} ref={salmonInputRef}/>{" "}
                <button onClick={() => {
                    if (salmonInputRef.current && salmonInputRef.current.value) {
                        addSalmon(parseInt(salmonInputRef.current.value))
                        salmonInputRef.current.value = ""
                    }
                }}>Add Salmon
                </button>
            </div>
            <div>
                <h3>{tuna} tuna available</h3>
                <input type={"number"} min={1} ref={tunaInputRef}/>{" "}
                <button onClick={() => {
                    if (tunaInputRef.current && tunaInputRef.current.value) {
                        addTuna(parseInt(tunaInputRef.current.value))
                        tunaInputRef.current.value = ""
                    }
                }}>Add Tuna
                </button>
            </div>
        </div>
    );
};

export default ResetInitialPage;
