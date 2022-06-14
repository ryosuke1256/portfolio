import { TAB_TITLES, TAB_PATHS } from '~/constants/app';

export type TabTitle = typeof TAB_TITLES[number];
// TODO:Rename
export type Href = typeof TAB_PATHS[keyof typeof TAB_PATHS];
