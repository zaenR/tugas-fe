import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPasangger } from 'src/app/models/IPassenger';

@Component({
  selector: 'app-passanger',
  templateUrl: './passanger.component.html',
  styleUrls: ['./passanger.component.css']
})
export class PassangerComponent implements OnInit {

  @Input("inputItem") items:any;

  constructor() { }

  ngOnInit(): void {
      console.log(this.items);
  }

  form!: IPasangger;
  arr: any = [];

  @Output("onDetail") detailEvent = new EventEmitter<any>();
  @Output("onDelete") deleteEvent = new EventEmitter<any>();

  onDelete(index: any) {
    this.deleteEvent.emit(index);
  }

  onEdit(cells: any, index: any) {
    (<HTMLInputElement>document.getElementById('idx')).value = index;
    (<HTMLInputElement>document.getElementById('id')).value = cells.id;
    (<HTMLInputElement>document.getElementById('nama')).value = cells.nama;
    (<HTMLInputElement>document.getElementById('kota')).value = cells.kota;
  }

  onReset() {
    (<HTMLInputElement>document.getElementById('idx')).value = '';
    (<HTMLInputElement>document.getElementById('id')).value = '';
    (<HTMLInputElement>document.getElementById('nama')).value = '';
    (<HTMLInputElement>document.getElementById('kota')).value = '';
  }

  onDetail(cells: any) {
    this.detailEvent.emit(cells);
  }
}
