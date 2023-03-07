import {create} from "zustand";
import {persist, devtools} from "zustand/middleware";

type FruitsState = {
    fruits: Array<string>
    addAFruit: (fruit: string) => void
}

export const useFruitsStore = create<FruitsState>()(
    devtools(
        persist(
            (setState, getState, store) => ({
                fruits: [],
                addAFruit: (fruit) => {
                    return setState((state) => ({
                        fruits: [...state.fruits, fruit]
                    }))
                }
            }),
            {name: 'zustand.store.fruits'}
        )
    )
)