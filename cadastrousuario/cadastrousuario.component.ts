import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioCadstroServiceService } from './usuariocadastro.service';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css']
})
export class CadastrousuarioComponent implements OnInit {

  formulario!: FormGroup;


  constructor(
    private service: UsuarioCadstroServiceService,
    private router: Router,
    private formBuilder: FormBuilder
 ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required
       
      ])],
		  
		  
      email: ['', Validators.compose([
        Validators.required
        
      ])],

      cpf: ['', Validators.compose([
        Validators.required
        
      ])],
      pisnis: ['', Validators.compose([
        Validators.required
        
      ])],

      rg: ['', Validators.compose([
        Validators.required
        
      ])],

      dv: ['', Validators.compose([
        Validators.required
       
      ])],
      dt_nasc: ['', Validators.compose([
        Validators.required
        
      ])],
      matricula: ['', Validators.compose([
        Validators.required
        
      ])],

      orgao_emissor: ['', Validators.compose([
        Validators.required
       
      ])],
      uf_emissor: ['', Validators.compose([
        Validators.required
       
      ])],
      ddd: ['', Validators.compose([
        Validators.required
        
      ])],
      celular: ['', Validators.compose([
        Validators.required
      ])],
      ic_def: ['', Validators.compose([
        Validators.required
       
      ])],
      lotacao_fisica: ['', Validators.compose([
        Validators.required
      ])],
      lotacao_adminstrativa: ['', Validators.compose([
        Validators.required,
      
      ])],

    })
 }
 criarUsuario() {
  if(this.formulario.valid){
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarUsuario'])
    })
  }
}




}
