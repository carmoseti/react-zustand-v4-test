import {create} from "zustand";

type SeafishState = {
    salmon: number
    tuna: number
}

type SeaFishActions = {
    addSalmon: (quantity: number) => void
    addTuna: (quantity: number) => void
    reset: () => void
}

const initialState: SeafishState = {
    salmon: 0,
    tuna: 0
}

export const useSeaFishStore = create<SeafishState & SeaFishActions>()((set, get) => ({
    ...initialState,
    addSalmon: quantity => {
        set({salmon: get().salmon + quantity})
    },
    addTuna: quantity => {
        set({tuna: get().tuna + quantity})
    },
    reset: () => {
        set(initialState)
    }
}))