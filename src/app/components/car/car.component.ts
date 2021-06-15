import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car/car';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';
import { CarDetailDto } from 'src/app/models/carDetailDto/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetailDtos: CarDetailDto[] =[];
  dataLoaded = false;
  
  constructor(private carService:CarService, private carDetailDtoService:CarDetailDtoService) { }

  ngOnInit(): void {
    this.getCars();
    this.getCarDetailDto();
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarDetailDto() {
    this.carDetailDtoService.getCarDetailDto().subscribe(response=>{
      this.carDetailDtos = response.data
      this.dataLoaded = true;
    })
  }

}
