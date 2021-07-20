import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-update",
  templateUrl: "./livro-update.component.html",
  styleUrls: ["./livro-update.component.css"],
})
export class LivroUpdateComponent implements OnInit {
  titulo = new FormControl("", [Validators.minLength(3)]);
  nomeAutor = new FormControl("", [Validators.minLength(3)]);
  textoLivro = new FormControl("", [Validators.minLength(10)]);


  constructor(
    private service: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

    livro: Livro = {
    id: "",
    titulo: "",
    nomeAutor: "",
    textoLivro: "",
  };

  id_cat: String = ''


  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.livro.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta;
    });
  }

  update(): void {
    this.service.update(this.livro).subscribe(
      (resposta) => {
        this.router.navigate([`categoria/${this.id_cat}/livro`]);
        this.service.mensagem("Livro Atualizado com sucesso");
      },
      (err) => {
        this.router.navigate([`categoria/${this.id_cat}/livro`]);
        this.service.mensagem("Falha ao atualizar o livro");
      }
    );
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
    this.router.navigate([`categoria/${this.id_cat}/livro`]);
  }
}
