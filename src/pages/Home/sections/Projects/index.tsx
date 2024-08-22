import dscatalogImg from "../../../../assets/dscatalog_img.png";
import dsvendasImg from "../../../../assets/dsvendas_img.png";
import dsmovieImg from "../../../../assets/dsmovie_img.png";
import * as css_projects from "./css-projects";

export default function Projects() {
    return (
        <section className={css_projects.section}>
            <h1 className="heading">
                Study <span className="text-yellow-400">Projects</span>
            </h1>
            <div>
                <div className={css_projects.projects_container}>
                    <div data-aos="fade-up">
                        <div className={css_projects.image_container}>
                            <img className="object-contain" src={dscatalogImg} alt="portfolio" />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <div className={css_projects.image_container}>
                            <img className="object-contain" src={dsvendasImg} alt="portfolio" />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <div className={css_projects.image_container}>
                            <img className="object-contain" src={dsmovieImg} alt="portfolio" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

