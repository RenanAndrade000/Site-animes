import { Latest } from 'src/app/models/latest';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  newUrl = "https://api.jikan.moe/v3/anime/1/recommendations";
  imgUrl: string[] = [];
  
  
  constructor(private http:HttpClient) { }
  
   

    getRecomendation(): Observable<any> {
      return this.http.get<any>(this.newUrl).map(res => {
        let recomend = {
          imgUrl:res['recommendations'].map((response : {image_url: any;}) => response.image_url),
          title:res['recommendations'].map((response: { title: any; }) => response.title)
        }
        return recomend;
      });
    }

}
