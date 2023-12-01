import { CreateAddressDTO } from "../../../../../future-be/src/dto/request";

export class AddressRes extends CreateAddressDTO {
  _id: string;
  default: boolean;
}
