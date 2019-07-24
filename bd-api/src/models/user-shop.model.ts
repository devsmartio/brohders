import {Entity, model, property} from '@loopback/repository';
import {Shop} from './shop.model';
@model()
export class UserShop extends Entity {
  @property({
    type: 'number',
  })
  userid: number;

  @property({
    type: 'number',
    id: true,
  })
  usershopid?: number;

  @hasMany(() => Shop, {keyTo: 'user-shopid'})
  shopid?: Shop[];

  constructor(data?: Partial<UserShop>) {
    super(data);
  }
}
