import { Controller } from "jot-framework"

export default class DocsController extends Controller {
  index() {
    return this.render("docs/index", {})
  }

  instalacao() {
    return this.render("docs/instalacao", {})
  }

  rotas() {
    return this.render("docs/rotas", {})
  }

  controllers() {
    return this.render("docs/controllers", {})
  }

  models() {
    return this.render("docs/models", {})
  }

  views() {
    return this.render("docs/views", {})
  }

  banco() {
    return this.render("docs/banco", {})
  }

  cli() {
    return this.render("docs/cli", {})
  }

  seguranca() {
    return this.render("docs/seguranca", {})
  }
}
