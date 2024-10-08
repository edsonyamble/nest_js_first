import {
  Body,
  Controller,
  Get,
  Post,
  // Query,
  UsePipes,
  // UseGuards,
  // UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
// import { ParseIntPipe } from 'src/conception/pipe';
// import { AuthGuard } from 'src/conception/guards';
// import { LoggingInterceptor } from 'src/conception/interceptor';
import { FlowerDto } from './flowers.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('flowers')
@ApiTags('Flower')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) { }

  @Get()
  // @UseInterceptors(LoggingInterceptor)
  // @UseGuards(AuthGuard)
  // findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
  //   console.log(pageNumber);
  //   return this.flowersService.findAll();
  // }
  findAll() {
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiResponse({ status: 201, description: 'the created has been succefully created' })
  @ApiResponse({ status: 403, description: 'forbidden' })
  @ApiBody({
    type: FlowerDto,
    description: 'json structure for flowers object'
  })
  // @UseGuards(AuthGuard)
  create(@Body() dto: FlowerDto) {
    return this.flowersService.create(dto);
  }
}
