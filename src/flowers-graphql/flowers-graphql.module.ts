import { Module } from '@nestjs/common';
import { FlowersGraphqlResolver } from './flowers-graphql.resolver';
import { FlowersService } from 'src/flowers/flowers.service';
import { PrismaService } from 'src/flowers/prisma.service';

@Module({
  providers: [FlowersGraphqlResolver, FlowersService,PrismaService],
})
export class FlowersGraphqlModule {}
