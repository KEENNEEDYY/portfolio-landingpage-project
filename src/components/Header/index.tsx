import * as css_header from "./css-header";

import { Bars3Icon } from "@heroicons/react/20/solid";

type Props = {
    openHeader: () => void;
}

export default function Header({ openHeader }: Props) {
    return (
        <div className={css_header.header_container}>
            <div className={css_header.header_itens}>
                <h1 className={css_header.header_title}>
                    Desenvolvedor
                    <span className={css_header.header_title_span}>Kennedy</span>
                </h1>
                <div className="nav-link">Home</div>
                <div className="nav-link">SERVICES</div>
                <div className="nav-link">ABOUT</div>
                <div className="nav-link">PROJECT</div>
                <div className="nav-link">BLOG</div>
                <div className="nav-link">CONTACT</div>
                <div onClick={openHeader}>
                    <Bars3Icon className="w-[2rem] lg:hidden h-[2rem] cursor-pointer text-yellow-300" />
                </div>
            </div>
        </div>
    );
};