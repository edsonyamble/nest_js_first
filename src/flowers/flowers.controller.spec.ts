import { Test, TestingModule } from '@nestjs/testing';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';
import { create } from 'domain';

describe('FlowersController', () => {
  let controller: FlowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowersController],
      providers: [
        {
          provide: 'FlowersService',
          useValue: {
            findALL: jest.fn().mockResolvedValue([
              {
                id: 1,
                name: 'Rose',
                color: 'Red',
                price: 10,
              },
            ]),
            create: jest.fn().mockResolvedValue({
              id: 2,
              name: 'Lily',
              color: 'White',
              price: 15,
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<FlowersController>(FlowersController);
  });

  it('should return an array of flowers ', async () => {
    expect(await controller.findAll()).toEqual([
      {
        id: 1,
        name: 'Rose',
        color: 'Red',
        price: 10,
      },
    ]);
  });

  it('should return an array of flowers ', async () => {
    expect(
      await controller.create({
        name: 'Lily',
        color: 'White',
        price: 15,
        updateAt: null,
      }),
    ).toEqual([
      {
        id: 2,
        name: 'Lily',
        color: 'White',
        price: 15,
      },
    ]);
  });
});
