import { NgwWowService } from 'ngx-wow';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vtu-section',
  templateUrl: './vtu-section.component.html',
  styleUrls: ['./vtu-section.component.css']
})
export class VtuSectionComponent implements OnInit {

  constructor(private router: Router,
    private wowService:NgwWowService) {
      // this.wowService.init();
  }

  ngOnInit(): void {
    this.wowService.init();
  }

}
