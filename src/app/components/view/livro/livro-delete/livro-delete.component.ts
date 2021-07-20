import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-delete",
  templateUrl: "./livro-delete.component.html",
  styleUrls: ["./livro-delete.component.css"],
})
export class LivroDeleteComponent implements OnInit {
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

  id_cat: String = "";

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

  delete(): void {
    this.service.delete(this.livro.id!).subscribe((resposta) => {
      this.router.navigate([`categoria/${this.id_cat}/livro`])
      this.service.mensagem('Livro deletado com sucesso!')
    }, err => {
      this.router.navigate([`categoria/${this.id_cat}/livro`])
      this.service.mensagem('Erro ao deletar o livro!')
    })
  }

  cancel(): void {
    this.router.navigate([`categoria/${this.id_cat}/livro`]);
  }
}
