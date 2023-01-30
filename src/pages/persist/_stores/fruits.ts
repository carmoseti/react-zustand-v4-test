import {create} from "zustand";
import {persist, devtools} from "zustand/middleware";

type FruitsState = {
    fruits: Array<string>
    actions: FruitsActions
}

type FruitsActions = {
    addFruit: (fruit: string) => void
}

export const useFruitsStore = create<FruitsState>()(
    devtools(
        persist(
            (set, get) => ({
                fruits: [],
                actions: {
                    addFruit: (fruit) => {
                        set((state) => ({
                            fruits: [...state.fruits, fruit]
                        }))
                    }
                }
            }),
            {name: 'zustand.stores.fruits'}
        )
    )
)