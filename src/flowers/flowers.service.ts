// import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { FlowerDto } from './flowers.dto';
// import { EnumApppMode } from './type';

@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma: PrismaService,
    // private readonly ConfigService: ConfigService,
  ) {}
  findAll() {
    // console.log(this.ConfigService.get<string>('MODE'));
    // console.log(this.ConfigService.get<EnumApppMode>('MODE'));
    return this.prisma.flower.findMany();
    // return [
    //   { name: 'Rose', color: 'red', price: 5 },
    //   { name: 'Tuilip', color: 'white', price: 12 },
    //   { name: 'Lity', color: 'black', price: 90 },
    // ];
  }
  create(dto: FlowerDto) {
    return this.prisma.flower.create({ data: dto });
  }
}
