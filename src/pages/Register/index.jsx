import Menu from '../../components/MenuClean'
import { BaseForm, DntDiv } from './styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../../supabaseClient'

function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(e) {
    e.preventDefault()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      return
    } else{
        alert("Registrado com sucesso!")
        navigate('/login')
    }

  }
  return (
    <>
      <Menu />

      <BaseForm>
        <form onSubmit={handleRegister}>
          <h1>Seja Bem-Vindo!</h1>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password"
              placeholder="Confirmar Senha"/>
          </div>
          <DntDiv>
            <p>possui conta?</p>
            <span onClick={() => navigate('/login')}>Faça seu login</span>
          </DntDiv>

          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </BaseForm>
    </>
  )
}

export default Register
