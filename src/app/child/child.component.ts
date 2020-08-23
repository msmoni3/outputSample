import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

childmsg:string="1";

ch(e){
  console.log(e);

}

bb : any = 321; 
aa:any=123;

@Output() messageEvent= new EventEmitter<string>()

sendtoParent(aa){
  console.log(aa)
  this.messageEvent.emit(aa)
  // this.childmsg=aa;
}

  ngOnInit() {
  }

}