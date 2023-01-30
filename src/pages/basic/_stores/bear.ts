import {create} from "zustand";

type BearState = {
    bears: number
    fish: number
    actions: BearActions
}

type BearActions = {
    increasePopulation: () => void
    removeAllBears: () => void
    eatFish: () => void
}

const useBearStore = create<BearState>((set) => ({
    bears: 0,
    fish: 10,
    actions: {
        increasePopulation: () => set((state) => ({
            bears: state.bears + 1
        })),
        removeAllBears: () => set({
            bears: 0
        }),
        eatFish: () => set((state) => ({
            fish: state.fish - 1
        }))
    }
}))

export const useBearStoreBearsValue: () => BearState['bears'] = () => useBearStore((state) => state.bears)
export const useBearStoreFishValue: () => BearState['fish'] = () => useBearStore((state) => state.fish)
export const useBearStoreActions: () => BearState['actions'] = () => useBearStore((state) => state.actions)