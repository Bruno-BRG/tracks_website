export default function Seguranca() {
  return (
    <article>
      <h1>Segurança</h1>
      <p class="lead">Proteção ligada por padrão, com saída para casos especiais.</p>
      <h2>CSRF</h2>
      <ul>
        <li>POST, PUT, PATCH e DELETE exigem token; GET, HEAD e OPTIONS, não.</li>
        <li>Formulários enviam o token no campo _csrf; JSON usa o header X-CSRF-Token.</li>
        <li>Sem token válido, a resposta é 403 antes da ação rodar.</li>
        <li>Rotas com autenticação própria (webhooks assinados) podem isentar com motivo registrado.</li>
      </ul>
      <h2>Sessão</h2>
      <ul>
        <li>Cookie assinado com HMAC usando JOT_SECRET.</li>
        <li>Sem JOT_SECRET em produção, o boot falha com erro didático.</li>
        <li>Gire o token CSRF após login e logout.</li>
      </ul>
      <h2>Flash</h2>
      <p>Mensagens de uma requisição só, ideais para confirmar criações após redirectTo.</p>
    </article>
  )
}
