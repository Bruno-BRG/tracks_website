import { routes } from "jot-framework"

export default routes((r) => {
  r.root("docs#index")
  r.get("/instalacao", "docs#instalacao")
  r.get("/rotas", "docs#rotas")
  r.get("/controllers", "docs#controllers")
  r.get("/models", "docs#models")
  r.get("/views", "docs#views")
  r.get("/banco", "docs#banco")
  r.get("/cli", "docs#cli")
  r.get("/seguranca", "docs#seguranca")
})
