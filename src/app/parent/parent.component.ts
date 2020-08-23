import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

childMessage:String


receiveMessage($event){
  console.log($event)
    this.childMessage =$event
}
  ngOnInit() {
  }

}