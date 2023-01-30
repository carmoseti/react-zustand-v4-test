import {create} from 'zustand'
import {persist, PersistStorage, createJSONStorage} from 'zustand/middleware'

type FishesStoreState = {
    fishes: number
    addAFish: () => void
}

const hashStorage: PersistStorage<FishesStoreState> = {
    getItem: (key) => {
        const searchParams = new URLSearchParams(location.hash.slice(1))
        const storedValue = searchParams.get(key)
        // return JSON.parse(storedValue as string)
        return JSON.parse(atob(storedValue as string)) // Base 64 encoded
    },
    setItem: (key, newValue): void => {
        const searchParams = new URLSearchParams(location.hash.slice(1))
        // searchParams.set(key, JSON.stringify(newValue))
        searchParams.set(key, btoa(JSON.stringify(newValue))) // Base 64 encoded
        location.hash = searchParams.toString()
    },
    removeItem: (key): void => {
        const searchParams = new URLSearchParams(location.hash.slice(1))
        searchParams.delete(key)
        location.hash = searchParams.toString()
    },
}

export const useFishesStore = create<FishesStoreState>()(
    persist(
        (set, get) => ({
            fishes: 0,
            addAFish: () => set({fishes: get().fishes + 1}),
        }),
        {
            name: 'zustand.storage.urlHash', // unique name
            storage: hashStorage,
        }
    )
)