import {
  Model,
  Column,
  Table,
  IsEmail,
  AllowNull,
  Unique,
} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @AllowNull(false)
  @Column
  name!: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column
  email!: string;

  @AllowNull(false)
  @Column
  password!: string;
}
