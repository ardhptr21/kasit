import { create } from "zustand";

type Store = {
  search?: string | null;
  monthly: string;
  setSearch: (search?: string | null) => void;
  setMonthly: (monthly: string) => void;
};

export const useFilterTransactionStore = create<Store>((set) => ({
  search: null,
  monthly: new Date().toISOString().split("T")[0].slice(0, 7),
  setSearch: (search) => set({ search }),
  setMonthly: (monthly) => set({ monthly }),
}));
