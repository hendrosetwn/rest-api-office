import { Type } from 'class-transformer';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class Address {
  @JoiSchema(Joi.number())
  id: number;

  @JoiSchema(Joi.string().required())
  street: string;

  @JoiSchema(Joi.string().required())
  city: string;

  @JoiSchema(Joi.string().required())
  country: string;
}

export class CreateUserDto {
  @JoiSchema(Joi.string().required())
  name: string;

  @JoiSchema(Joi.string().required())
  email: string;

  @JoiSchema(Joi.string().required())
  password: string;

  @JoiSchema(Joi.array().required())
  @Type(() => Address)
  address: Address;
}
