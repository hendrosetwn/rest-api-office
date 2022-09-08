import { Type } from 'class-transformer';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class Staff {
  @JoiSchema(Joi.number().required())
  id: number;

  @JoiSchema(Joi.string().required())
  name: string;

  @JoiSchema(Joi.string().required())
  email: string;

  @JoiSchema(Joi.string().required())
  phone: string;
}

export class UpdateOfficeDto {
  @JoiSchema(Joi.string().required())
  name: string;

  @JoiSchema(Joi.string().required())
  country: string;

  @JoiSchema(Joi.array().required())
  @Type(() => Staff)
  staff: Staff[];
}
