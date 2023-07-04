import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

url= 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  constructor(private httpClient: HttpClient) { }

  getDataBBFinance() {
    let headers = new HttpHeaders ({
      'X-RapidAPI-Host':'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '8dffed411emshee9c731f2d2c15cp14f8a0jsn58c2023ac737',
    })
    return this.httpClient.get(this.url, {headers :headers});
  }
}
