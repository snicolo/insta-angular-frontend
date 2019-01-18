import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Marker } from '../model/marker';
import { HttpClient } from '@angular/common/http';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  
 
 searchForm : FormGroup;
  submitted = false;
  previous;
  obj;
  //selection of radio button
  private selectedLink: string="loc";   
  
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
           
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  
  






  
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
  
  //obj = this.searchForm.value.object;
  
  get f(){return this.searchForm.controls;}
 
  public getMarkers(){
    this.http.get<Marker[]>('http://snicolo.pythonanywhere.com/'+ "igloc?" + "user=" + this.searchForm.value.username + "&pass=" + this.searchForm.value.password + "&" + this.selectedLink + "=" + this.searchForm.value.object)
    .subscribe(result => this.markers = result);
  }
  

  onSubmit(){
    this.submitted=true;
    this.getMarkers(); 
    this.obj = this.searchForm.value.object;
  }

}
