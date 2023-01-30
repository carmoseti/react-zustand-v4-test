import {create} from "zustand";

type InDecrementState = {
    value: number
}

export const useInDecrementStore = create<InDecrementState>(
    (set) => ({
        value: 0
    })
)

export const decrement = () => useInDecrementStore.setState((state) => ({
    value: state.value - 1
}))

export const increment = () => useInDecrementStore.setState((state) => ({
    value: state.value + 1
}))