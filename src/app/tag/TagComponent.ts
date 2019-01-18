import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Marker } from '../model/marker';
import { HttpClient } from '@angular/common/http';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  previous;
  obj;
  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }
  markerDragEnd(m, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  markers: Marker[];
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  ngOnInit() {
    //this.getMarkers(); 
    this.searchForm = this.formBuilder.group({
      username: [''],
      password: [''],
      //tagradio:[''],
      //placeradio:[''],
      object: ['']
    });
  }
  get f() { return this.searchForm.controls; }
  // public body = "user=" + this.searchForm.value.username + "&pass=" + this.searchForm.value.password + "&tag=" + this.searchForm.value.object;
  public getMarkers() {
    this.http.get<Marker[]>('http://snicolo.pythonanywhere.com/' + "igtag?" + "user=" + this.searchForm.value.username + "&pass=" + this.searchForm.value.password + "&tag=" + this.searchForm.value.object)
      .subscribe(result => this.markers = result);
  }
  onSubmit() {
    this.submitted = true;
    this.getMarkers();
    this.obj = "#"+this.searchForm.value.object;
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.searchForm.value))
    //this.router.navigate(['/show']);
  }
}
