interface IProfil {
    id: number;
    nama: string;
    status: boolean;
}

function Decorator(constructorFunction: Function) {
    console.log('decorator sebelum class')
}

@Decorator
class Perkenalan implements IProfil {

    id: number = 1;
    nama: string = 'Zaenal';
    status: boolean = true;

    private greet() {
        console.log(this.id);
        console.log(this.nama);
        console.log(this.status);
    }

}

console.log(new Perkenalan());

function getArr(arr: number[]) {
    for (let i in arr) {
        console.log(arr[i]);
    }
}

getArr([1, 2, 3, 4]);