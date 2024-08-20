import { CodeBracketIcon, ServerStackIcon, ShareIcon } from "@heroicons/react/24/outline";
import * as css_service from "./css-service";

export default function Service() {
    return (
        <section className={css_service.section}>
            <div>
                <p className="heading">
                    My <span className="text-yellow-400">Services</span>
                </p>
                <div className={css_service.card_container}>
                    <div>
                        <div className={css_service.card + " " + css_service.card_one}>
                            <ShareIcon className={css_service.card_icon} />
                            <h1 className={css_service.card_title}>Network Analyst</h1>
                            <p className={css_service.card_description}>
                                Projetar, implementar e manter redes de computadores,
                                garantindo conectividade, segurança e resolução de problemas para operações eficientes
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={css_service.card + " " + css_service.card_two}>
                            <ServerStackIcon className={css_service.card_icon} />
                            <h1 className={css_service.card_title}>DevOps</h1>
                            <p className={css_service.card_description}>
                                Integrar desenvolvimento e operações, automatizar processos,
                                melhorar a colaboração e garantir entregas contínuas e eficientes de software.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={css_service.card + " " + css_service.card_three}>
                            <CodeBracketIcon className={css_service.card_icon} />
                            <h1 className={css_service.card_title}>FullStack</h1>
                            <p className={css_service.card_description}>
                                Criar e manter aplicações completas, trabalhando no front-end e back-end,
                                integrando banco de dados e servidores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}