import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

	//i18nSelect
	nombre: string = "Jose";
	genero: string = "masculino";

	invitacionMapa ={
		"masculino": "invitarlo",
		"femenino": "invitarla"
	}

	//i18nPlural
	clientes:string[] = ["Maria", "Jose", "Juan","Ramiro","Sebastian"];
	clientesMapa={
		"=0": "no tenemos ningun cliente esperando.",
		"=1": "tenemos un cliente esperando.",
		"other": "tenemos # clientes esperando."
	}

	cambiarCliente(){
		this.nombre="Susana";
		this.genero="femenino";
	}

	borrarCliente(){
		this.clientes.pop();
	}

	//KeyValue Pipe
	persona = {
		nombre: "Jose",
		edad: 22,
		direccion: "Ecuador"
	}

	//Json Pipe
	heroes =[
		{
			nombre:"Superman",
			vuela:true
		},

		{
			nombre:"Robin",
			vuela:false
		},

		{
			nombre:"Aquaman",
			vuela:false
		}

	];

	//Async Pipe
	miObservable = interval(2000); //0,1,2,3,4...
	valorPromesa = new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve("Tenemos data de promesa");
		}, 3500);
	});
}
