import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class updatePostDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
