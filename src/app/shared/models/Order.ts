import { OrderStatus} from '../enums/OrderStatus.enum';

export interface Order{
 id: number;
 status: OrderStatus;
 creatingtime: Date;
 finishingtime: Date;

  }
