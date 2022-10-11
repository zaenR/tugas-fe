import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detail: any;

  constructor(private activeRouter : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.detail);
    this.activeRouter.queryParams.subscribe(items => {this.detail = items});

  }

  onBack() : void {

  }
}
