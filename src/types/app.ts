import { TAB_TITLES, TAB_PATHS } from '~/constants/app';

export type PageTitle = typeof TAB_TITLES[number];
export type PagePath = typeof TAB_PATHS[keyof typeof TAB_PATHS];
