import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto/carDetailDto';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {
  apiUrl="https://localhost:44382/api/cars/getcardetails"

  constructor(private httpClient: HttpClient) { }

  
getCarDetailDto():Observable<ListResponseModel<CarDetailDto>>{
  return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl)
}
}
