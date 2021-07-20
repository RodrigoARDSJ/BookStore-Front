import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-create",
  templateUrl: "./livro-create.component.html",
  styleUrls: ["./livro-create.component.css"],
})
export class LivroCreateComponent implements OnInit {
  titulo = new FormControl("", [Validators.minLength(3)]);
  nomeAutor = new FormControl("", [Validators.minLength(3)]);
  textoLivro = new FormControl("", [Validators.minLength(10)]);

  livro: Livro = {
    id: "",
    titulo: "",
    nomeAutor: "",
    textoLivro: "",
  };

  id_cat: String = "";

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
  }

  create(): void {
    this.service.create(this.livro, this.id_cat).subscribe((reposta) => {
      this.router.navigate([`categoria/${this.id_cat}/livro`])
      this.service.mensagem('Livro criado com sucesso!')
    }, err => {
      this.router.navigate([`categoria/${this.id_cat}/livro`])
      this.service.mensagem('Erro ao criar um novo livro!')
    });
  }

  getMessage() {
    if (this.titulo.invalid) {
      return "Titulo deve conter entre 3 e 100 caracteres";
    }
    if (this.nomeAutor.invalid) {
      return "Nome do autor deve conter entre 3 e 100 caracteres";
    }
    if (this.textoLivro.invalid) {
      return "texto deve conter entre 10 e 2000000 caracteres";
    }
    return false;
  }

  cancel(): void {
    this.router.navigate([`categoria/${this.id_cat}/livro`])
  }
}
