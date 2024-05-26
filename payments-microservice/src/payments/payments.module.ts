import { Module } from '@nestjs/common';
import { PaymenentsMicroserviceController } from './payments.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
  imports: [NatsClientModule],
  controllers: [PaymenentsMicroserviceController],
  providers: [],
})
export class PaymentsModule {}
