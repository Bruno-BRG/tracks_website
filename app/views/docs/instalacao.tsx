const TREE = [
  "blog/",
  "  package.json",
  "  config/app.ts, config/database.ts, config/routes.ts",
  "  app/controllers/",
  "  app/views/layouts/application.tsx",
  "  db/schema.ts, db/migrate/",
  "  public/",
].join("\n")

const SCRIPTS = ["npm run dev      # jot server", "npm run migrate  # jot db:migrate", "npm run routes   # lista as rotas", "npm run console  # REPL com db e models"].join("\n")

export default function Instalacao() {
  return (
    <article>
      <h1>Instalação</h1>
      <p class="lead">Pré-requisito: Node.js 24 ou mais novo.</p>
      <h2>Criar um app</h2>
      <pre>
        <code>npm create jot@latest blog</code>
      </pre>
      <p>O gerador copia o template, ajusta o nome e instala as dependências publicadas no npm.</p>
      <h2>Estrutura gerada</h2>
      <pre>
        <code>{TREE}</code>
      </pre>
      <h2>Scripts do dia a dia</h2>
      <pre>
        <code>{SCRIPTS}</code>
      </pre>
    </article>
  )
}
