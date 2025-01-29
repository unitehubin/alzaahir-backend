import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TestDocument = HydratedDocument<Test>;

export class Test {
  @Prop()
  name: string;
  @Prop()
  message: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
