export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    position:String;
    aboutMe:String;

    constructor(nombre: String,apelliddo:String,img:String,position:String,aboutMe:String){
        this.nombre=nombre;
        this.apellido=apelliddo;
        this.img=img;
        this.position=position;
        this.aboutMe=aboutMe;
    }
}
