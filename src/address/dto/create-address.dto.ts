import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateAddressDto {
  @JoiSchema(Joi.string().required())
  street: string;

  @JoiSchema(Joi.string().required())
  city: string;

  @JoiSchema(Joi.string().required())
  country: string;
}
