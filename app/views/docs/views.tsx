const SAMPLE = [
  'export default function HomeIndex(props: { posts: Post[] }) {',
  '  return (',
  '    <section>',
  '      <h1>Posts</h1>',
  '      {props.posts.map((post) => (',
  '        <article key={post.id} class="card">',
  '          <h2>{post.title}</h2>',
  '        </article>',
  '      ))}',
  '    </section>',
  '  )',
  '}',
].join("\n")

export default function Views() {
  return (
    <article>
      <h1>Views</h1>
      <p class="lead">JSX renderizado no servidor, sem build: o arquivo .tsx vira HTML no boot.</p>
      <pre>
        <code>{SAMPLE}</code>
      </pre>
      <ul>
        <li>Componentes podem ser assíncronos; o render aguarda as promessas.</li>
        <li>Texto e atributos saem escapados contra XSS por padrão.</li>
        <li>Use raw(html) para injetar HTML cru quando precisar.</li>
        <li>O layout application envolve todas as páginas, salvo layout: false.</li>
      </ul>
      <h2>Interatividade sem SPA</h2>
      <p>Atributos jot-method, jot-target e jot-swap nos formulários fazem fetch e trocam trechos da página. Sem jot-target, o formulário funciona do jeito nativo.</p>
    </article>
  )
}
