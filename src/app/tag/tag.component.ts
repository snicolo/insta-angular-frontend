import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Marker } from '../model/marker';
import { HttpClient } from '@angular/common/http';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

 searchForm : FormGroup;
  submitted = false;
  previous;
  obj;
 
//click event on marker
clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }
  
  markerDragEnd(m, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  
  markers : Marker[]

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    
    this.searchForm = this.formBuilder.group({
      username:[''],
      password:[''],
      object:['']
    });
    
  }
  

  get f(){return this.searchForm.controls;}
  //get markers from backend
  public getMarkers(){
    this.http.get<Marker[]>('http://snicolo.pythonanywhere.com/'+ "igtag?" +"user=" + this.searchForm.value.username + "&pass=" + this.searchForm.value.password + "&tag=" + this.searchForm.value.object)
    .subscribe(result => this.markers = result);
  }
  
  onSubmit(){
    this.submitted=true;
    this.getMarkers(); 
    this.obj = this.searchForm.value.object;

  }

}
