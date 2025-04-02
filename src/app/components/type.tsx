export interface Movie {
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  id: number;
}
export interface SearchDropdownProps {
  closeDropdown: () => void;
}