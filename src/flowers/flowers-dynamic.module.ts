import { Module, DynamicModule, Options } from "@nestjs/common";
@Module({})
export class FlowersModule {
    static forRoot(option: any): DynamicModule {
        return {
            module: FlowersModule,
            providers: [{ provide: 'OPTIONS', useValue: Options }]
        }
    }
}