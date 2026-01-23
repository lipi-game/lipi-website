export interface CategoryDropdownProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}