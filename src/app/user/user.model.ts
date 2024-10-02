export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  activated: boolean;
}
