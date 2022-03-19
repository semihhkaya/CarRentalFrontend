import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car/car';
import { CarDetailDto } from 'src/app/models/carDetailDto/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetailDtos: CarDetailDto[] =[];
  currentCar : Car;
  filterText = "";
  dataLoaded = false;
  
  constructor(private carService:CarService, private carDetailDtoService:CarDetailDtoService,
    private activatedRoute:ActivatedRoute,private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars();
        this.getCarDetailDto();
      }
    })

    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getCars();
        this.getCarDetailDto();
      }
    })
  }
  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe(response=>{
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

  getById(carId:number) {
    this.carService.getById(carId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  addToCart(car:Car){
    this.toastrService.success("Araç Kiralama İşlemi İçin Seçildi",car.carName)
    this.cartService.addToCart(car);
  }

  

}
