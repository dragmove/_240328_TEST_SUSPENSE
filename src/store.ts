import { create } from 'zustand'

interface GlobalState {
  world: string;
  season: string;

  setWorld: (val: string) => void;
  setSeason: (val: string) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
    world: '',
    season: '',

    setWorld: (value) => set({ world: value }),
    setSeason: (value) => set({ season: value }),
}));