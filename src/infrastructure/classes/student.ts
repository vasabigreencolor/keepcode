import type { IStudent } from "../interfaces/domains/i-student"

export class Student {
  id: number
  name: string
  username: string
  email: string
  phone: string


  constructor(data: IStudent) {
    this.id = data.id
    this.name = data.name
    this.username = data.username
    this.email = data.email
    this.phone = data.phone
  }
}