import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class CreateStaffDto {
  @JoiSchema(Joi.string().required())
  name: string;

  @JoiSchema(Joi.string().required())
  email: string;

  @JoiSchema(Joi.number().required())
  phone: string;

  @JoiSchema(Joi.number().required())
  office_id?: number;
}
