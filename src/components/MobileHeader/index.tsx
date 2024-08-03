import { XMarkIcon } from "@heroicons/react/20/solid";
import * as css_mobile_header from "./css-mobile-header";

type Props = {
    header: boolean;
    closeHeader: () => void;
}

export default function MobileHeader({ header, closeHeader }: Props) {

    const headerAnimation = header ? 'translate-x-0' : 'translate-x-[100%]';

    return (
        <div className={headerAnimation + css_mobile_header.container}>
            <div className={css_mobile_header.itens}>
                <div className="nav-link-mobile" >HOME</div>
                <div className="nav-link-mobile" >SERVICES</div>
                <div className="nav-link-mobile" >ABOUT</div>
                <div className="nav-link-mobile" >PROJECT</div>
                <div className="nav-link-mobile" >BLOG</div>
                <div className="nav-link-mobile" >CONTACT</div>
            </div>
            <div onClick={closeHeader} className={css_mobile_header.hamburger_container}>
                <XMarkIcon />
            </div>
        </div>
    );
}