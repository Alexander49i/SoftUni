import { logout } from "../requests.js"

export const renderLogout =(ctx)=> {

    logout().then((res)=>{

        localStorage.clear()
        ctx.page.redirect('/')
  
    })
    

}