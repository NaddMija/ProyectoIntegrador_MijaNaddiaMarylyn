export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String,apelliddo:String,img:String){
        this.nombre=nombre;
        this.apellido=apelliddo;
        this.img=img;
    }
}