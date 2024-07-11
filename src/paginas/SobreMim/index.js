import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Maria Clara!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto da Maria Clara programando"
                className={styles.fotoSobreMim}
            />


<p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluna de Front-end na Alura.
            </p>
            <p className={styles.paragrafo}>
                Sou uma pessoa comunicativa e, ao mesmo tempo, um pouco tímida. Embora tenha receio do novo, encaro os desafios de frente. Desde os meus 13 anos, ingressando precocemente no mundo profissional, aprendi a correr atrás das minhas conquistas. Com uma forte vontade de aprender, acumulei experiência em diversas áreas, desde trabalhar em conveniências até atuar na cozinha. Atualmente estudando ADS busco constantemente expandir meus conhecimentos e aprimorar minhas habilidades nesse campo dinâmico e em constante evolução. Como geminiana, aprecio a versatilidade e a curiosidade inerentes ao meu signo. Amo mergulhar em livros que me transportam para outros mundos. Nos momentos de lazer, você pode me encontrar dando uma volta de patins em parques. Em casa, sou acompanhada por três cachorros adoráveis que trazem muita alegria ao meu dia a dia. Considero-me uma pessoa atenciosa e prestativa, sempre disposta a ajudar quem precisa. Minha jornada tem sido marcada por desafios e aprendizados que moldaram quem sou hoje. Estou ansiosa para contribuir ativamente, adquirir novas habilidades e me desenvolver profissionalmente em um ambiente dinâmico e inovador.
            </p>

            <p className={styles.paragrafo}>
                No momento, envolvida no projeto Oracle ONE, uma parceria entre a Alura e a Oracle. Essa jornada desafiadora e repleta de aprendizado está me preparando para uma carreira promissora nesse campo em constante evolução
            </p>
         

        </PostModelo>
    );
}
