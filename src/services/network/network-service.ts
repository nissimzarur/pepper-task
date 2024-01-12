import HttpStatusCode from "./http-status-codes";

class NetworkService {
  private _headers: { [key: string]: string } = {
    Authorization: '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  public async fetch(input: RequestInfo, init?: RequestInit): Promise<{ response: any; status: number; success: boolean }> {
    let body = undefined;
    if (init?.body) body = JSON.stringify(init.body);

    const responseObj = await fetch(input, {
      ...init,
      body,
      headers: { ...this._headers, ...init?.headers },
    }).catch(error => {
      console.warn(error);
      throw error;
    });

    const status = responseObj?.status || HttpStatusCode.INTERNAL_SERVER_ERROR;
    const response = await responseObj.json();

    if (!responseObj || String(status).charAt(0) !== '2') {
      return {
        response,
        status,
        success: false,
      };
    }

    return {
      response,
      status,
      success: true,
    };
  }
}
export default new NetworkService();
