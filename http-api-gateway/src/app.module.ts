import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          // hostname is this way, as its run in docker
          // In case of network it would be nats://10.11.12.13:4222
          servers: ['nats://nats'],
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
