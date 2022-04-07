import  page  from "../node_modules/page/page.mjs";
import { renderNaviation } from "./navigation.js";
import { renderCatalog } from "./pages/catalog.js";
import { renderCreate } from "./pages/create.js";
import { deleteMsg } from "./pages/delete.js";
import { renderDetails } from "./pages/details.js";
import { renderEdit } from "./pages/edit.js";
import { renderHome } from "./pages/home.js";
import { renderLogin } from "./pages/login.js";
import { renderLogout } from "./pages/logout.js";
import { renderRegister } from "./pages/resgister.js";


export const main =  document.getElementById('main-content')

page(renderNaviation)//nav
page('/',renderHome)
page('/login',renderLogin)
page('/register',renderRegister)
page('/logout',renderLogout)
page('/catalog',renderCatalog)
page('/details',renderDetails)
page('/create',renderCreate)
page('/edit',renderEdit)
page('/delete',deleteMsg)

page.start()

