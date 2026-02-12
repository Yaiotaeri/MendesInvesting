import Menu from '../../components/MenuClean'
import { BaseForm, DntDiv } from './styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    localStorage.setItem("token", data.session.access_token);
    navigate("/");
  }

  return (
    <>
      <Menu></Menu>

      <BaseForm>
        <form onSubmit={handleLogin}>
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
          <DntDiv>
            <p>Não possui conta?</p>
            <span onClick={() => navigate('/register')}>Clique Aqui</span>
          </DntDiv>

          <div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </BaseForm>
    </>
  )
}

export default Login
