import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class UpdateAddressDto {
  @JoiSchema(Joi.string().required())
  street: string;

  @JoiSchema(Joi.string().required())
  city: string;

  @JoiSchema(Joi.string().required())
  country: string;
}
