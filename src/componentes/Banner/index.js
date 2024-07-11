import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                Boas-vindas ao meu espaço pessoal! Eu sou Maria Clara, aluna de Front-end da Alura. Aqui, compartilho conhecimentos transmitidos pelo instrutor Antônio Evaldo, baseados em sua vasta experiência e aprendizado ao longo da vida. Espero que gostem.
                </p>
            </div> 

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto da Maria Clara"
                />
            </div>   
        </div>
    )
}