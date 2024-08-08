import { Helmet } from 'react-helmet-async'

import { Input } from '@/components/ui/input'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div>
        <h1 className="trac text-3xl font-semibold tracking-tighter">
          Pedidos
        </h1>
      </div>

      <div className="space-y-2.5">
        <form action="" className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>
          <Input
            id="client_name"
            placeholder="Nome do Cliente"
            className="h-8 w-[320px]"
          />
        </form>

        <div></div>
      </div>
    </>
  )
}
