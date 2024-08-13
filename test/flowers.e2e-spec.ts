
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { FlowersService } from '../src/flowers/flowers.service';
import { response } from 'express';


describe('FlowersController (e2e)', () => {
    let app: INestApplication;
    let catsService = { findAll: () => ['test'] };

    beforeAll(async () => {
        const moduleMixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        })
            .compile();

        app = moduleMixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe())
        await app.init();
    });

    it(`/flowers (GET)`, () => {
        return request(app.getHttpServer())
            .get('/flowers')
            .expect(200)
            .expect(
                [
                    {
                        "id": 1,
                        "name": "Rose",
                        "color": "red",
                        "price": 5,
                        "createdAt": "2024-08-07T00:26:21.619Z",
                        "updatedAt": "2024-08-07T00:26:21.619Z"
                    },
                    {
                        "id": 3,
                        "name": "Tuilip",
                        "color": "white",
                        "price": 12,
                        "createdAt": "2024-08-07T00:35:27.375Z",
                        "updatedAt": "2024-08-07T00:35:27.375Z"
                    },
                    {
                        "id": 4,
                        "name": "Lity",
                        "color": "black",
                        "price": 90,
                        "createdAt": "2024-08-07T00:35:54.065Z",
                        "updatedAt": "2024-08-07T00:35:54.065Z"
                    }
                ]
            );
    });
    it(`/flowers (POST)`, () => {
        return request(app.getHttpServer())
            .post('/flowers')
            .send({
                name: 'Sunflower',
                color: "yellow",
                price: 8,
            })
            .expect(response => {
                console.log(response.body)
                return response.body.name === 'Sunflower'
            }

            );
    });
    afterAll(async () => {
        await app.close();
    });
});