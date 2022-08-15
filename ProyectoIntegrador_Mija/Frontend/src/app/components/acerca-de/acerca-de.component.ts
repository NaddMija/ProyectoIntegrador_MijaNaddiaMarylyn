import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona= new persona("","","","","");
  usuarioAutenticado:boolean=true//deberia estar en false al loguearse
  form:FormGroup;

  constructor(public personaService: PersonaService, private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(5)]],
      apellido:['',[Validators.required,Validators.minLength(5)]],
      position:['',[Validators.required,Validators.minLength(5)]],
      img:['',[Validators.required]],
      aboutMe:['',[Validators.required,Validators.minLength(5)]]
    })
  }

  get nombre(){
    return this.form.get("nombre");
  }
  get apellido(){
    return this.form.get("apellido");
  }
  get position(){
    return this.form.get("position");
  }
  get img(){
    return this.form.get("img");
  }
  get aboutMe(){
    return this.form.get("aboutMe");
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      this.persona=data})
  }


  guardarAcerca(){
    if (this.form.valid){
      alert("Enviar los datos al servicio (servidor)");
      this.form.reset();
    document.getElementById("cerrarModalAcerca")?.click();
    
    }
    else
    {
      alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }
}
