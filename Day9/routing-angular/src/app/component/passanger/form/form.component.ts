import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IPasangger } from 'src/app/models/IPassenger';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: IPasangger;
  arr: any = [];
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  sendToChild() {

    this.form = {
      id: (<HTMLInputElement>document.getElementById('id')).value,
      nama: (<HTMLInputElement>document.getElementById('nama')).value,
      kota: (<HTMLInputElement>document.getElementById('kota')).value,
    };
    if ((<HTMLInputElement>document.getElementById('idx')).value != '') {
      this.arr[(<HTMLInputElement>document.getElementById('idx')).value] = this.form;
    } else {
      this.arr.push(this.form);
    }

    this.onReset();
  }

  onReset() {
    (<HTMLInputElement>document.getElementById('idx')).value = '';
    (<HTMLInputElement>document.getElementById('id')).value = '';
    (<HTMLInputElement>document.getElementById('nama')).value = '';
    (<HTMLInputElement>document.getElementById('kota')).value = '';
  }

  onDelete(index: any) {
    if (index > -1) {
      this.arr.splice(index, 1);
      this.onReset();
    }
  }
  onDetail(cells: any) {
    console.log(cells);
    this._router.navigate(["/detail"], { queryParams: cells });
  }

}
