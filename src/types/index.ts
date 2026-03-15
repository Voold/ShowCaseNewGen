//ANCHOR - User's interface update
export interface User {
  id: number;
  email: string;
  firstname: string;
  middlename?: string;
  lastname: string;
  avatar?: string;
}