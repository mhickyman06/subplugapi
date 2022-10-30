import { ResourcesserviceService } from './../services/resourcesservice.service';
import { NgwWowService } from 'ngx-wow';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';

 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export default class HomeComponent implements OnInit{

  @ViewChild('counter') counter: ElementRef;

  param1=0;
  param2 = 0;
  param3 = 0;
  param4 = 0;

  @HostListener('window:scroll',['$event'])

  onWindowScroll(event){
      var rect = this.counter.nativeElement.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;
      (elemTop >= 0) && (elemBottom <=window.innerHeight) ? this.param1 = 2100:null;
      (elemTop >= 0) && (elemBottom <=window.innerHeight) ? this.param2 = 500:null;
      (elemTop >= 0) && (elemBottom <=window.innerHeight) ? this.param3 = 345:null;
      (elemTop >= 0) && (elemBottom <=window.innerHeight) ? this.param4 = 100:null;

  }
  public carouselWidth = 1200;
  // public carouselHeight = 1200;
  title = 'owlcarouselinAngular';  
  // Images = ['../src//assets/images/bg-3.jpeg', '../src/../assets/images/bg-3.jpeg', '../assets/images/bg-3.jpeg'];  
  
  // SlideOptions = { items: 1, dots: true, nav: true };  
  // CarouselOptions = { items: 3, dots: true, nav: true };

  customOptions: OwlOptions = {
    // loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    items:3,
    dots: true,
    loop:false,
    margin:10,
    navSpeed: 600,
    autoWidth:false,
    autoHeight:true,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1,
        nav:true
      },
      600: {
        items: 2,
        nav:true

      },
      1000: {
        items: 3,
        nav:true
      }
     
    },
    nav: true
  }

  // public DataPricings = [
  //   {data:"150mb",price:"150naira",duration:"1Month"},
  //   {data:"150mb",price:"150naira",duration:"1Month"},
  //   {data:"150mb",price:"150naira",duration:"1Month"},
  //   {data:"150mb",price:"150naira",duration:"1Month"},
  //   {data:"150mb",price:"150naira",duration:"1Month"},
  //   {data:"150mb",price:"150naira",duration:"1Month"},
  // ]
  public DataPricings;
  constructor(private router: Router,
    private wowService:NgwWowService,
    private resources: ResourcesserviceService) {
      this.wowService.init();     
  }
  ngOnInit() {
    this.resources.getDataPricings().subscribe(data=>{
      let vowel ;
      console.log(data);
      this.DataPricings = data;
    },
    (error:HttpErrorResponse)=>{
      console.error(error.error)
    })
  }

  changeBg(id){
    document.getElementById(id).classList.remove("bg-yellow")
    document.getElementById(id).classList.add("bg-yellow-sm");
  }
  returnBg(id){
   
    document.getElementById(id).classList.remove("bg-yellow-sm");
    document.getElementById(id).classList.add("bg-yellow")
  }
  login(){
  }

}

