import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  AllowNull,
  Unique,
} from "sequelize-typescript";
import { Category } from "./Category";

@Table
export class Product extends Model<Product> {
  @AllowNull(false)
  @Unique
  @Column
  name!: string;

  @AllowNull(false)
  @Column
  price!: number;

  @AllowNull(false)
  @Column
  description!: string;

  @AllowNull(false)
  @Column
  quantity!: string;

  @AllowNull(false)
  @Unique
  @Column
  image!: string;

  @AllowNull(false)
  @Unique
  @ForeignKey(() => Category)
  @Column
  catalogId!: number;

  @BelongsTo(() => Category)
  Category!: Category;
}
