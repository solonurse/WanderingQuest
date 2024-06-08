export interface User {
	id?: string;
  name?: string | null;
  email?: string | null;
};

export interface Account {
	provider?: string;
};

export interface PostLoginHeaderProps {
  setIsLoggedOut: React.Dispatch<React.SetStateAction<boolean>>;
};
