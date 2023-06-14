export type Roles = 'user' | 'admin' | 'superAdmin';

export type UserHeader = {
  userId: number;
  email: string;
  role: Roles;
};
