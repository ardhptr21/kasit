import { create } from "zustand";

type Store = {
  monthly: string;
  setMonthly: (monthly: string) => void;
};

export const useFilterExpenseStore = create<Store>((set) => ({
  monthly: new Date().toISOString().split("T")[0].slice(0, 7),
  setMonthly: (monthly) => set({ monthly }),
}));
