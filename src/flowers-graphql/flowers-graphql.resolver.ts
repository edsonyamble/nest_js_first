import { Query, Resolver } from '@nestjs/graphql';
import { FlowersGraphqlService } from './flowers-graphql.service';
import { FlowersService } from 'src/flowers/flowers.service';

@Resolver()
export class FlowersGraphqlResolver {
  constructor(private readonly flowersService: FlowersService) {}
  @Query(() => String,{name:'flowers'})
  finfAll(){}
}
