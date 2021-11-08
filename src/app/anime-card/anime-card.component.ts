
import { Component, Input, OnInit } from '@angular/core';
import  Latest  from 'src/app/models/latest'
import { DashboardService } from '../dashboard/dashboard.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent implements OnInit {
  recommendations: any[] = [];
  imgUrl: any[] = [];
 
  constructor(private dashboardService : DashboardService) { }

  ngOnInit() {
    

    this.dashboardService.getRecomendation().subscribe(recomend => {
     this.recommendations = recomend.title
     this.imgUrl = recomend.imgUrl
     console.log(this.recommendations)
    });
  
/*     this.dashboardService.newgetLatest().subscribe(
      (data:any) => {
        this.latest = data;
        console.log(this.latest);
      },
      (error:any) => {
        console.log(error);
      }
    ); */
    
  
  }
}
