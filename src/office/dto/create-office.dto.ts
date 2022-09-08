import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateOfficeDto {
  @JoiSchema(Joi.string().required())
  name: string;

  @JoiSchema(Joi.string().required())
  country: string;

  @JoiSchema(Joi.number().required())
  staff_id?: number;
}
