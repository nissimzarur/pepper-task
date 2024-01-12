import networkService from '@app/src/services/network/network-service';
import { IGetBalanceResponse } from './interfaces';



export default async function getBalance(): Promise<IGetBalanceResponse> {
  const url = 'https://api.npoint.io/3fc8f279899456907de0';
  const errMsg = '"חלה שגיאה בעת שליפת מאזן החשבון"';

  const response = await networkService.fetch(url).catch(error => {
    console.log(error);
    throw errMsg;
  });

  if (!response.success) throw errMsg;

  return response.response;
}
