export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserInterface extends Partial<UserInterface> {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UpdateUserInterface extends Partial<UserInterface> {
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}
