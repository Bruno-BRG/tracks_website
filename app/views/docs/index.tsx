const QUICKSTART = [
  "npm create jot@latest blog",
  "cd blog",
  "npm run migrate",
  "npm run dev    # http://localhost:3000",
].join("\n")

export default function DocsIndex() {
  return (
    <article>
      <h1>JOT — JS on Tracks</h1>
      <p class="lead">
        Framework web opinativo para TypeScript, inspirado no Rails: convenção sobre
        configuração, JSX renderizado no servidor e SQLite sem complicação.
      </p>
      <h2>Começo rápido</h2>
      <pre>
        <code>{QUICKSTART}</code>
      </pre>
      <h2>Ideias centrais</h2>
      <ul>
        <li>Rotas declaradas em config/routes.ts, com helpers tipados via paths.</li>
        <li>Controllers finos que renderizam views ou redirecionam com flash.</li>
        <li>Models Active Record com validações, sobre SQLite via Drizzle.</li>
        <li>Views em JSX puro no servidor, sem JavaScript no cliente por padrão.</li>
        <li>CSRF ligado por padrão em formulários e requisições JSON.</li>
      </ul>
      <h2>Leia a seguir</h2>
      <ul>
        <li>
          <a href="/instalacao">Instalação e estrutura do app</a>
        </li>
        <li>
          <a href="/rotas">Rotas e helpers de caminho</a>
        </li>
        <li>
          <a href="/models">Models, validações e banco</a>
        </li>
      </ul>
    </article>
  )
}
