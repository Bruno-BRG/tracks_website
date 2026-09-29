const SCHEMA = [
  'import { table, id, string, text, timestamps } from "jot-framework"',
  '',
  'export const posts = table("posts", {',
  '  id: id(),',
  '  title: string().notNull(),',
  '  body: text(),',
  '  ...timestamps(),',
  '})',
].join("\n")

const FLOW = ['jot db:generate  # drizzle-kit gera db/migrate/*.sql', 'jot db:migrate   # aplica em ordem', 'jot db:rollback  # desfaz a última (precisa de -- jot:down)'].join("\n")

export default function Banco() {
  return (
    <article>
      <h1>Banco de dados</h1>
      <p class="lead">SQLite no desenvolvimento, com schema em TypeScript e migrations em SQL puro.</p>
      <h2>Schema</h2>
      <p>Em db/schema.ts você declara tabelas com a DSL, que compila para Drizzle:</p>
      <pre>
        <code>{SCHEMA}</code>
      </pre>
      <ul>
        <li>A chave JS vira snake_case no SQL: authorId vira author_id.</li>
        <li>timestamps() adiciona createdAt e updatedAt automáticos.</li>
        <li>refs() declara chave estrangeira para outra tabela.</li>
      </ul>
      <h2>Migrations</h2>
      <pre>
        <code>{FLOW}</code>
      </pre>
      <p>Tudo depois da linha -- jot:down no SQL é o rollback.</p>
    </article>
  )
}
