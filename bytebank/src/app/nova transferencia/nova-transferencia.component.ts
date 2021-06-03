import { Router } from '@angular/router';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from "@angular/core";
import { Transferencia } from '../models/transferencia.models';

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  @Output() AoTransferir = new EventEmitter();

  valor:number;
  destino:number;

  constructor(private service: TransferenciaService, private router: Router) { }

  transferir() {
    console.log('valor transferência')

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(resultato => {
      console.log(resultato);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.log(error)
    );
  }

  limparCampos() {
   this. valor = 0;
    this.destino = 0;
  }
}
