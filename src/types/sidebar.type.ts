export interface SideBarItem {
  title: string;
  url: string;
}

export interface SideBarGroup {
  title: string;
  items: SideBarItem[];
}

export type SideBarItems = SideBarGroup[];
