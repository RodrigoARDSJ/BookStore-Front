import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";

@Component({
  selector: "app-categoria-delete",
  templateUrl: "./categoria-delete.component.html",
  styleUrls: ["./categoria-delete.component.css"],
})
export class CategoriaDeleteComponent implements OnInit {
  constructor(
    private service: CategoriaService,
    private rout: ActivatedRoute,
    private router: Router
  ) {}

  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: "",
  };

  ngOnInit(): void {
    this.categoria.id = this.rout.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe((resposta) => {
      this.service.mensagem("Categoria deletada com sucesso!");
      this.router.navigate(["categoria"]);
    }, err => {
      this.service.mensagem(err.error.error);
    })
  }

  cancel(): void {
    this.router.navigate(["categoria"]);
  }
}
