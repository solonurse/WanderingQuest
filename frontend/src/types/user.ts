export interface User {
  id: number,
  uid: string,
  name: string;
  email: string;
  avatar: { url: string | null },
  created_at: Date,
  updated_at: Date,
};
