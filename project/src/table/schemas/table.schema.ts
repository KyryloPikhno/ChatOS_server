import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TableDocument = HydratedDocument<Table>;

@Schema({
  timestamps: true,
})
export class Table {
  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  gameName: string;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ default: false })
  status: boolean;

  @Prop({ required: true })
  currency: string;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;

  @Prop({ required: true })
  confirm: boolean;
}

export const TableSchema = SchemaFactory.createForClass(Table);
