const ACTION = [
  'import { Controller, paths } from "jot-framework"',
  'import { Post } from "../models/post.ts"',
  "",
  "export default class PostsController extends Controller {",
  "  async index() {",
  "    const posts = await Post.all()",
  '    return this.render("posts/index", { posts })',
  "  }",
  "",
  "  async show() {",
  "    const post = await Post.find(this.params.id)",
  "    if (!post) return this.renderNotFound()",
  '    return this.render("posts/show", { post })',
  "  }",
  "",
  "  async create() {",
  "    const post = Post.new(this.params)",
  "    if (await post.save()) {",
  "      return this.redirectTo(paths.post(post.id), { flash: { notice: \"Salvo.\" } })",
  "    }",
  '    return this.render("posts/new", { post }, { status: 422 })',
  "  }",
  "}",
].join("\n")

export default function Controllers() {
  return (
    <article>
      <h1>Controllers</h1>
      <p class="lead">
        O controller recebe a requisição, conversa com os models e devolve uma resposta:
        HTML, redirecionamento ou JSON.
      </p>
      <pre>
        <code>{ACTION}</code>
      </pre>
      <h2>O que cada ação enxerga</h2>
      <ul>
        <li>this.params: rota + query + corpo, já mesclados.</li>
        <li>this.query e this.body, quando você quer só uma parte.</li>
        <li>this.session e this.flash para estado entre requisições.</li>
        <li>this.request como saída de emergência (contexto Hono).</li>
      </ul>
      <h2>Respostas</h2>
      <ul>
        <li>this.render(view, props): HTML com o layout application por padrão.</li>
        <li>this.redirectTo(caminho): redireciona, com flash opcional.</li>
        <li>this.json(dados): resposta JSON.</li>
        <li>this.renderNotFound(): página 404.</li>
      </ul>
      <p>
        Se a ação não retorna nada, o framework renderiza a view convencional
        (Posts#index vira posts/index).
      </p>
    </article>
  )
}
