import React from 'react'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div>
            <div>Bem-vindo</div> {/* colocar variavel do usuário */}
            <div className={styles.navbarStyle}>
                <li>Estoque</li>
                <li>Relátorio</li>
                <li>Financeiro</li>
                <li>Cadastrar produtos</li>
                <div className='config_Client'>Cleiton</div>
            </div>
        </div>

    )
}


export default NavBar