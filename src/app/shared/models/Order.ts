import { OrderStatus } from '../enums/OrderStatus.enum';

export interface Order {
  status: OrderStatus;
  creatingTime: Date;
  finishingTime: Date;
  waiterId: number;
  tableId: number;
}
