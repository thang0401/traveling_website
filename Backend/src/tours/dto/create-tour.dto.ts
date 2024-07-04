import { IsString, IsEmpty, IsNumber } from 'class-validator';
export class CreateTourDto {
  @IsEmpty()
  id: number;

  @IsString()
  @IsEmpty()
  name: string;

  @IsNumber()
  @IsEmpty()
  price: number;

  @IsEmpty()
  image: string;

  @IsString()
  @IsEmpty()
  category: string;
  @IsString()
  @IsEmpty()
  description: string;

  @IsNumber()
  @IsEmpty()
  rate: number;

  @IsString()
  @IsEmpty()
  amountoftime: string;
}
