import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class UpdateOfficeDto {
  @JoiSchema(Joi.number())
  id?: number;

  @JoiSchema(Joi.string())
  name?: string;

  @JoiSchema(Joi.string())
  country?: string;
}
