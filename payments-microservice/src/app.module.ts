import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { NatsClientModule } from './nats-client/nats-client.module';

@Module({
  imports: [PaymentsModule, NatsClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
