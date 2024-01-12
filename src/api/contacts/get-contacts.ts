import networkService from '@app/src/services/network/network-service';
import { IGetContacts } from './interfaces';

export default async function getContacts(): Promise<IGetContacts> {
  const url = 'https://api.npoint.io/76e59c76f1d150e47618';
  const errMsg = 'חלה שגיאה בעת שליפת המוטבים';

  const response = await networkService.fetch(url).catch(error => {
    console.log(error);
    throw errMsg;
  });

  if (!response.success) throw errMsg;

  return response.response;
}
