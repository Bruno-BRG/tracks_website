const MODEL = [
  'import { Model, minLength, presence } from "jot-framework"',
  'import { posts } from "../../db/schema"',
  "",
  "export class Post extends Model<typeof posts> {",
  "  static readonly table = posts",
  "  static validations = {",
  "    title: [presence(), minLength(3)],",
  "  }",
  "}",
].join("\n")

const QUERY = [
  "await Post.all()",
  "await Post.find(1)",
  'await Post.findBy({ title: "x" })',
  "await Post.where({ published: true })",
  "await Post.create({ title: \"Olá\" })",
  "await post.save()     // false se inválido",
  "await post.destroy()",
].join("\n")

export default function Models() {
  return (
    <article>
      <h1>Models</h1>
      <p class="lead">Active Record sobre SQLite: a classe espelha a tabela do schema.</p>
      <pre>
        <code>{MODEL}</code>
      </pre>
      <h2>Consultas e persistência</h2>
      <pre>
        <code>{QUERY}</code>
      </pre>
      <ul>
        <li>save() valida antes de gravar e preenche post.errors quando falha.</li>
        <li>Validações prontas: presence, minLength, maxLength e format.</li>
        <li>createdAt e updatedAt são mantidos automaticamente.</li>
      </ul>
    </article>
  )
}
