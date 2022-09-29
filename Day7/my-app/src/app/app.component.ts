import { Component, Input, VERSION } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  form!: IPasengger;
  arr: any = [];

  sendToChild() {

    this.form = {
      id: (<HTMLInputElement>document.getElementById('id')).value,
      nama: (<HTMLInputElement>document.getElementById('nama')).value,
      kota: (<HTMLInputElement>document.getElementById('kota')).value,
    };
    if((<HTMLInputElement>document.getElementById('idx')).value != ''){
      this.arr[(<HTMLInputElement>document.getElementById('idx')).value] = this.form;
    } else {
      this.arr.push(this.form);
    }

    this.onReset();
  }

  onDelete(index: any) {
    if (index > -1) {
      this.arr.splice(index, 1);
      this.onReset();
    }
  }

  onEdit(cells: any , index: any){
    (<HTMLInputElement>document.getElementById('idx')).value = index;
    (<HTMLInputElement>document.getElementById('id')).value = cells.id;
    (<HTMLInputElement>document.getElementById('nama')).value = cells.nama;
    (<HTMLInputElement>document.getElementById('kota')).value = cells.kota;
  }

  onReset(){
    (<HTMLInputElement>document.getElementById('idx')).value = '';
    (<HTMLInputElement>document.getElementById('id')).value = '';
    (<HTMLInputElement>document.getElementById('nama')).value = '';
    (<HTMLInputElement>document.getElementById('kota')).value = '';
  }
}


export interface IPasengger {
  id: string;
  nama: string;
  kota: string;
}

