import { Model, Column, Table, HasMany } from "sequelize-typescript";
import { Product } from "./Product";

@Table
export class Category extends Model<Category> {
  @Column
  name!: string;

  @HasMany(() => Product)
  products!: Product[];
}

