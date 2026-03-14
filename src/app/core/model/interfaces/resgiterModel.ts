export interface ResgiterModel { 

    
  userId: number,
  fullName: string,
  email: string,
  phoneNumber: string,
  passwordHash: string,
  roleId: number,
  city: string,
  isActive: boolean,
  createdDate: string

}
export interface login{
  email: string,
  passwordHash:string
}
export interface Environment{
  api:string;
}
