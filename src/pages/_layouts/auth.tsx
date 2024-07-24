import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function Authlayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5" />
          <span>pizza.shop</span>
        </div>
        <footer className="text-sm font-semibold">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
