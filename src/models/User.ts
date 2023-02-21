import { Model, Column, Table, DataType } from "sequelize-typescript";

interface Card {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
}

@Table
export class User extends Model<User> {
  @Column
  name!: string;

  @Column
  email!: string;

  @Column
  password!: string;

  @Column({
    type: DataType.ARRAY(DataType.JSON),
  })
  favourites!: Card[];
}
