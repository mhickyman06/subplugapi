import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private Router:Router) {
   }

  ngOnInit(): void {
    
    var toggler = document.getElementById("toggler");
    var primary_nav = document.getElementById("primary-navigation")

    toggler.addEventListener("click",()=>{
      const visibility = primary_nav.getAttribute("data-visible");
      if(visibility == "false"){
        console.log(visibility);
        primary_nav.setAttribute("data-visible","true")
        toggler.setAttribute("aria-expanded","true")
        // toggler.style.backgroundImage= "url('../../assets/images/open-menu.png')"
      }else{
        primary_nav.setAttribute("data-visible","false")
        toggler.setAttribute("aria-expanded","false")
        // toggler.style.backgroundImage= "url('../../assets/images/close-menu.png')"
      }
    })
  }

}
