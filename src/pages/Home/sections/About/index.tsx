import * as css_about from './css-about';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import aboutImg from '../../../../assets/about.jpg';

export default function About() {
    return (
        <section>
            <div className={css_about.main}>
                <div className={css_about.container}>
                    <div>
                        <h1 className={css_about.title}>
                            SOBRE MIM
                        </h1>
                        <h2 className={css_about.subtitle}>
                            Transformando <span className={css_about.subtitle_span}>códigos </span>
                            em soluções
                        </h2>
                        <div className={css_about.description_container}>
                            <span className={css_about.description_mark}></span>
                            <p className={css_about.description_text}>
                                Quando estou trabalhando em um projeto, meu foco é garantir que a funcionalidade seja priorizada e que a
                                usabilidade seja considerada em cada etapa. Estou constantemente buscando maneiras de melhorar minhas
                                habilidades e aprender novas tecnologias para oferecer soluções de qualidade e inovadoras.
                            </p>
                        </div>
                        <button className="button-cv-primary">
                            <p>Download Cv</p>
                            <ArrowDownTrayIcon className="button-cv-icon-primary" />
                        </button>
                    </div>
                    <div className={css_about.img_container}>
                        <img src={aboutImg} alt="user" className={css_about.img} />
                        <div className={css_about.img_shadow_background}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}