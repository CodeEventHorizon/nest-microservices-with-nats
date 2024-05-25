import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';

@Controller()
export class PaymenentsMicroserviceController {
  @EventPattern('createPayment')
  createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto);
  }
}
