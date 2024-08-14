import * as css_introduction from './css-introduction';
import '../../../../../src/assets/banner.jpg';
import Particle from "../../../../components/Particle";
import TextEffect from '../../../../components/TextEffect';
import PerfilImage from '../../../../../src/assets/profile-pic-about.jpg';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

export default function Introduction() {
  return (
    <section className={css_introduction.section}>
      <Particle />
      <div className={css_introduction.main}>
        <div>
          <h1 className={css_introduction.title}>
            OLÁ, EU SOU <span className={css_introduction.title_span}>KENNEDY!</span>
          </h1>
          <TextEffect />
          <p className={css_introduction.perfil_description}>
            Como um desenvolvedor full-stack, dedico-me a transformar ideias em aplicações inovadoras. Explore meus projetos mais recentes, mostrando minha experiência em React, SpringBoot e desenvolvimento de sistemas.
          </p>
          <div className={css_introduction.buttons_container}>
            <button className={css_introduction.cv_button}>
              <p>Download Cv</p>
              <ArrowDownTrayIcon className={css_introduction.cv_button_icon} />
            </button>
            <button className={css_introduction.video_button}>
              <PlayCircleIcon className={css_introduction.video_button_icon} />
              <p className={css_introduction.video_button_text}>
                Watch The Video
              </p>
            </button>
          </div>
        </div>
        <div className={css_introduction.image_container}>
          <img src={PerfilImage} alt="user" className={css_introduction.perfil_image} />
        </div>
      </div>
    </section>
  );
}

