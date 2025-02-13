import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Rule {
  id: string;
  content: string;
}

interface AdminState {
  isAuthenticated: boolean;
  mainRules: Rule[];
  jobRules: Rule[];
  robberyRules: Rule[];
  gangRules: Rule[];
  login: (username: string, password1: string, password2: string, password3: string) => boolean;
  logout: () => void;
  updateRules: (type: 'main' | 'job' | 'robbery' | 'gang', rules: Rule[]) => void;
}

const useStore = create<AdminState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      mainRules: [{ id: '1', content: 'قوانین اصلی سرور که از طریق پنل ادمین قابل ویرایش است.' }],
      jobRules: [{ id: '1', content: 'قوانین شغل‌ها که از طریق پنل ادمین قابل ویرایش است.' }],
      robberyRules: [{ id: '1', content: 'قوانین رابری که از طریق پنل ادمین قابل ویرایش است.' }],
      gangRules: [{ id: '1', content: 'قوانین گنگ‌ها که از طریق پنل ادمین قابل ویرایش است.' }],
      login: (username, password1, password2, password3) => {
        if (
          username === 'minerbomb' &&
          password1 === 'RAnDoMShiT!@' &&
          password2 === 'KqS&WkUqwPkQd*E%wf' &&
          password3 === 'Zk^#o%dvKA^vpYXK'
        ) {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false }),
      updateRules: (type, rules) => {
        set(() => {
          const newState: Partial<AdminState> = {};
          switch (type) {
            case 'main':
              newState.mainRules = rules;
              break;
            case 'job':
              newState.jobRules = rules;
              break;
            case 'robbery':
              newState.robberyRules = rules;
              break;
            case 'gang':
              newState.gangRules = rules;
              break;
          }
          return newState;
        });
      },
    }),
    {
      name: 'admin-storage',
    }
  )
);

export default useStore;
