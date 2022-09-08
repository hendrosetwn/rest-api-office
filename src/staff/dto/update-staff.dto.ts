import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class UpdateStaffDto {
  @JoiSchema(Joi.number())
  id?: number;

  @JoiSchema(Joi.string())
  name?: string;

  @JoiSchema(Joi.string())
  email?: string;

  @JoiSchema(Joi.number())
  phone?: number;
}
