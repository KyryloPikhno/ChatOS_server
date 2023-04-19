import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TableDocument = HydratedDocument<Table>;

@Schema({
  timestamps: true,
})
export class Table {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  age: number;
}

export const TableSchema = SchemaFactory.createForClass(Table);
