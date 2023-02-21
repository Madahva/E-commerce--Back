import { Model, Column, Table } from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column
  name!: string;

  @Column
  email!: string;

  @Column
  password!: string;
}
