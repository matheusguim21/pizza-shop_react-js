import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signupFormSchema = z.object({
  restauratntname: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email('Digite um e-mail válido'),
})

type FormDataProps = z.infer<typeof signupFormSchema>

export function SignUp() {
  const { formState, register, handleSubmit } = useForm<FormDataProps>()

  async function handleSignUp(data: FormDataProps) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Enviamos um link de autenticação para o seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignUp(data),
        },
      })
    } catch (error) {
      toast.error('E-mail inválido')
    }
  }

  return (
    <>
      <Helmet title="Cadastrar-se" />
      <div className="p-8">
        <Button variant={'ghost'} asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer Login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex- flex-col justify-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Criar conta grátis
            </h1>
            <p className="font-sm text-muted-foreground">
              Seja um parceiro e comece as vendas
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button
              disabled={formState.isSubmitting}
              className="w-full"
              type="submit"
            >
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
