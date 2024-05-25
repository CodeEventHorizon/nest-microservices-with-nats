import { Module } from '@nestjs/common';
import { PaymenentsMicroserviceController } from './payments.controller';

@Module({
  imports: [],
  controllers: [PaymenentsMicroserviceController],
  providers: [],
})
export class PaymentsModule {}
