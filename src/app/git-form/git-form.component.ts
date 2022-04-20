import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  searchName:string | undefined;
  @Output()searchOutput = new EventEmitter<any>()


  constructor() { }

  ngOnInit(): void {
  }
  search(){
    console.log(this.searchName)
    this.searchOutput.emit(this.searchName)
  }

}
