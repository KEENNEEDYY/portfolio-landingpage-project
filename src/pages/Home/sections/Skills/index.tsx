import * as css_skils from './css-skills.ts';
import SkillLanguage from "../../../../components/SkillLanguage";
import SkillsItem from "../../../../components/SkillsItem";
import * as utils from './utils.ts';


export default function Skills() {

    return (
        <section className={css_skils.section}>
            <h1 className="heading">
                Education &
                <span className="text-yellow-400"> Skill</span>
            </h1>
            <div className={css_skils.skill_itens_container}>
                <div className={css_skils.skill_card}>
                    <SkillsItem title="Instrutor de Informática" year="2010 - 2014" description={utils.skillDescription1} />
                    <SkillLanguage skill1="HTML" skill2="JAVA" skill3="SQL" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
                <div className={css_skils.skill_card}>
                    <SkillsItem title="Técnico em Informática" year="2014 - 2015" description={utils.skillDescription2} />
                    <SkillLanguage skill1="PHP" skill2="SQL" skill3="Visual Basic" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
                <div className={css_skils.skill_card}>
                    <SkillsItem title="Analista de suporte técnico" year="2017 - 2018" description={utils.skillDescription3} />
                    <SkillLanguage skill1="Visual Basic" skill2="Excel" skill3="Power BI" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
                <div className={css_skils.skill_card}>
                    <SkillsItem title="Analista de Redes" year="2018 - 2024" description={utils.skillDescription4} />
                    <SkillLanguage skill1="OSI" skill2="TCP/IP" skill3="Swithing" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
                <div className={css_skils.skill_card}>
                    <SkillsItem title="Analista de Redes e Sistemas" year="2024 - Atual" description={utils.skillDescription5} />
                    <SkillLanguage skill1="Switing" skill2="MPLS" skill3="Router" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
            </div>
        </section>
    );
};