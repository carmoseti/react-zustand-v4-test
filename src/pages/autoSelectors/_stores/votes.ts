import {create, StoreApi, UseBoundStore} from "zustand";


type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S
) => {
    let store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }

    return store
}


type VotesState = {
    votes: number
    actions: VotesActions
}

type VotesActions = {
    castVote: () => void
}

const useVotesStoreBase = create<VotesState>(
    (set) => ({
        votes: 0,
        actions: {
            castVote: () => {
                set((state) => ({
                    votes: state.votes + 1
                }))
            }
        }
    })
)

export const useVotesStore = createSelectors(useVotesStoreBase)