import React from 'react'
import styles from './css/Login.module.css'
import LogoImagem from '../components/icon/logoChaveiroUniao.jpg'

function Login() {
    return (
        <div>
            <img src={LogoImagem} alts= 'LogoEmpresa'/>
            <form action="">
                <label>Email</label>
                <input type="text" />
                <label >Senha</label>
                <input type="password" />
            </form>
            <div className='container'>
                <button class="btn btn-primary" type="button">Acessar Sistema</button>
                <button class="btn btn-primary" type="button">Criar uma Conta</button>
                <div>Esqueceu a Senha?

                </div>
            </div>

        </div>
    )
}

export default Login