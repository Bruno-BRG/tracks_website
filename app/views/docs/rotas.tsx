const BASIC = [
  'import { routes } from "jot-framework"',
  "",
  "export default routes((r) => {",
  '  r.root("home#index")',
  '  r.get("/sobre", "pages#about", { as: "about" })',
  '  r.resource("posts")',
  "})",
].join("\n")

export default function Rotas() {
  return (
    <article>
      <h1>Rotas</h1>
      <p class="lead">Todas as rotas vivem em config/routes.ts, numa DSL simples.</p>
      <pre>
        <code>{BASIC}</code>
      </pre>
      <h2>Recurso REST</h2>
      <p>
        Uma chamada a r.resource("posts") cria as sete rotas REST e os helpers paths.posts(),
        paths.newPost(), paths.post(id) e paths.editPost(id).
      </p>
      <table>
        <thead>
          <tr>
            <th>Método</th>
            <th>Caminho</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>/posts</td>
            <td>posts#index</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/posts/new</td>
            <td>posts#new</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/posts</td>
            <td>posts#create</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/posts/:id</td>
            <td>posts#show</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/posts/:id/edit</td>
            <td>posts#edit</td>
          </tr>
          <tr>
            <td>PUT/PATCH</td>
            <td>/posts/:id</td>
            <td>posts#update</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>/posts/:id</td>
            <td>posts#destroy</td>
          </tr>
        </tbody>
      </table>
      <h2>Formulários HTML</h2>
      <p>
        Navegadores só enviam GET e POST. Para PUT, PATCH e DELETE, inclua um campo oculto
        _method no formulário — o cliente jot-* e o servidor respeitam esse campo.
      </p>
    </article>
  )
}
