// π μΈν°νμ΄μ€μ νμ μλ¦¬μμ€ μ μ© μμ 
// λ°μ΄ν°λ₯Ό ννν  λλ νμ μλ¦¬μμ€λ₯Ό μ°κ³ 
// νμ΄ν°λ₯Ό ν¬κ΄νλ κ°μ²΄(ν΄λμ€ ...)λ₯Ό λ¬μ¬νλ κ²½μ°μλ§ μΈν°νμ΄μ€λ₯Ό μ¬μ©νλ€.

// type: μ»΄νμΌ μ ν΄λΉ κ°μ΄ λ€μ΄κ°λμ§μ λν κ²μ¬ μ©λμ΄λ€.
export type YesOrNo = 'Y' | 'N';
export type DayOfWeek = 'μ' | 'ν' | 'μ' | 'λͺ©' | 'κΈ' | 'ν ' | 'μΌ';
// enum: μ€μ  λ°μ΄ν°λ‘ λ°νμ μ ν΄λΉ κ°μ΄ μ€μ λ‘ λ€μ΄κ°λ€.
export enum DayOfTheWeek { 'μ', 'ν', 'μ', 'λͺ©', 'κΈ', 'ν ', 'μΌ' };

export type Name = string;
export type Email = string;
// ν¨μμ λ¦¬ν΄ κ°μ λν νμμ κ·μ ν  μ μμ
// string ννμ λ¦¬ν΄ κ°μ κ°λ FooFunction
export type FooFunction = () => string;

// μΈν°νμ΄μ€
// κ°μ²΄ νμ μ μ
// μ΄λ¦μ΄ μ€λ³΅λμ΄λ νλμ μΈν°νμ΄μ€λ‘ μ·¨κΈλ°μ μ€λ₯ λ°μ X (κΆμ₯νλ μμλ μλ)
export interface IUser {
  readonly id: number;
  readonly name: Name;
  email: Email;
  receiveInfo: boolean;
  active: YesOrNo;
}

// ?: μ ν ν­λͺ©
// ν΄λΉ μμ±μ΄ μμ΄λ λκ³  μμ΄λ λ¨μ μλ―Έ
export interface IUser {
  address?: string;
}

// μμ: μΈν°νμ΄μ€ νμ₯
export interface IUserProfile extends IUser {
  profileImage: string;
  github?: string;
  twitter?: string;
}
 
// μμ: νμ alias λ΄μμ νμ₯
export type TUserProfile = IUser & {
  profileImage: string;
  github?: string;
  twitter?: string;
}

// μ¬λ¬ μμ±μ μμλ°κΈ° 
export interface Color {
  fontColor: string;
  strokeColor: string;
  borderColor: string;
  backgroundColor: string;
}

export type Display = {
  display: 'none' | 'block';
  visibility: boolean;
  opacity: number;
}

export type Geometry = {
  width: number;
  height: number;
  padding: number;
  margin: number;
}

export interface IStyle extends Color, Display, Geometry {
  tagName : string;
}

export type TStyle = Color & Display & Geometry & {
  tagName : string;
}

// μμ±λͺμ νμκ³Ό μμ±μ κ°μ νμμ μ§μ 
export interface IOnlyNumberValueObject {
  [key: string]: number;
}

// ν¨μ κ·κ²© μ€μ 
// κ·κ²© μ€μ μ ν ν¨μλ₯Ό μ μ©ν  λμλ ν­μ ν¨μ ννμμ μ¨μΌνλ€.
export interface IGetApi { 
  (url: string, search?: string) : Promise<string>;
}

export type TGetApi = {
  (url: string, search?: string) : Promise<string>;
}