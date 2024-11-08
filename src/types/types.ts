export interface NavItem {
  id: string;
  icon: JSX.Element;
  label: string;
  component: React.ComponentType<{ isDesktop: boolean }>;
  settings: React.ComponentType;
} 