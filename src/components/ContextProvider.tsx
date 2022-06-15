import React, { useReducer, createContext, FC, Dispatch, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { getIndexFromPathName } from '~/utils';

type Action = {
  type: 'CHANGE';
  activeIndex: number;
};

export type Context = {
  activeIndex: number;
  dispatch: Dispatch<Action> | null;
};

const activeIndexReducer = (activeIndex: number, action: Action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.activeIndex;
    default:
      return activeIndex;
  }
};

export const ActiveIndexContext = createContext<Context>({ activeIndex: 0, dispatch: null });

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const router = useRouter();
  const [activeIndex, dispatch] = useReducer(activeIndexReducer, getIndexFromPathName(router.pathname));
  return <ActiveIndexContext.Provider value={{ activeIndex, dispatch }}>{children}</ActiveIndexContext.Provider>;
};
