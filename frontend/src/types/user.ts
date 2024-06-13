export interface User {
  id: number,
  uid: string,
  name: string;
  email: string;
  avatar: { url: string | null },
  is_guest: boolean,
  created_at: Date,
  updated_at: Date,
};
