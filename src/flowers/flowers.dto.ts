import { IsNumber, IsString } from 'class-validator';

export class FlowerDto {
  @IsString({ message: 'имя не строка ' })
  name: string;

  @IsString()
  color: string;

  @IsNumber()
  price: number;

}

export type TFLowersUpdateDto = Partial<FlowerDto>;
//передать поляя который хотим обновить
