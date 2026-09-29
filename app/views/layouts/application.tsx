const LINKS: Array<{ href: string; label: string }> = [
  { href: "/", label: "Início" },
  { href: "/instalacao", label: "Instalação" },
  { href: "/rotas", label: "Rotas" },
  { href: "/controllers", label: "Controllers" },
  { href: "/models", label: "Models" },
  { href: "/views", label: "Views" },
  { href: "/banco", label: "Banco de dados" },
  { href: "/cli", label: "CLI" },
  { href: "/seguranca", label: "Segurança" },
]

export default function ApplicationLayout(props: { children?: unknown; title?: string }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{props.title ?? "Documentação JOT"}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="shell">
          <aside class="sidebar">
            <a href="/" class="brand">
              JOT docs
            </a>
            <nav>
              {LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>
          <main class="content">{props.children}</main>
        </div>
        <script src="/_jot/jot.js"></script>
      </body>
    </html>
  )
}
