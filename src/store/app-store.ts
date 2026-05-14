import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_NETWORK_ID } from '@/config/networks';

interface AppState {
  networkId: string;
  setNetworkId: (id: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      networkId: DEFAULT_NETWORK_ID,
      setNetworkId: (networkId) => set({ networkId }),
      sidebarOpen: true,
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
    }),
    {
      name: 'pulseer-app-state',
    }
  )
);
