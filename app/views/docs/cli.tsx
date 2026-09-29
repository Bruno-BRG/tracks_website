const CMDS = [
  'jot new blog                 # cria o app e instala',
  'jot server                   # manifesto + watch em :3000',
  'jot db:generate              # gera SQL a partir do schema',
  'jot db:migrate               # aplica migrations',
  'jot db:rollback 2            # desfaz as 2 últimas',
  'jot routes                   # tabela de rotas',
  'jot console                  # REPL com db e models',
  'jot generate scaffold post title:string  # CRUD completo',
].join("\n")

export default function Cli() {
  return (
    <article>
      <h1>CLI</h1>
      <p class="lead">O binário jot acompanha o ciclo inteiro do app.</p>
      <pre>
        <code>{CMDS}</code>
      </pre>
      <ul>
        <li>jot new: copia o template e instala as dependências.</li>
        <li>jot server: regenera o manifesto e sobe com recarregamento.</li>
        <li>jot db:generate, db:migrate e db:rollback cuidam do SQL.</li>
        <li>jot routes imprime a tabela de rotas; jot console abre o REPL.</li>
        <li>jot generate scaffold cria model, migration, controller e views de CRUD.</li>
      </ul>
      <p>Depois de criar ou remover controllers e views, reinicie o jot server para regenerar o manifesto.</p>
    </article>
  )
}
