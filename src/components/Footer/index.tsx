import * as css_footer from "./css-footer";
import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";

export default function Footer() {
    return (
        <div className={css_footer.main_container}>
            <div className={css_footer.institutional_information}>
                <div className={css_footer.institutional_information_items}>
                    <div className={css_footer.icon_container}>
                        <MapIcon className={css_footer.icon_style} />
                    </div>
                    <div>
                        <h1 className={css_footer.iten_title}>
                            Address
                        </h1>
                        <p className={css_footer.iten_subtitle}>
                            Lorem ipsum dolor, sit
                        </p>
                    </div>
                </div>
                <div className={css_footer.institutional_information_items}>
                    <div className={css_footer.icon_container}>
                        <DevicePhoneMobileIcon className={css_footer.icon_style} />
                    </div>
                    <div>
                        <h1 className={css_footer.iten_title}>
                            Phone
                        </h1>
                        <p className={css_footer.iten_subtitle}>
                            +5531911112222 <br />
                            +5531922223333
                        </p>
                    </div>
                </div>
                <div className={css_footer.institutional_information_items}>
                    <div className={css_footer.icon_container}>
                        <EnvelopeIcon className={css_footer.icon_style} />
                    </div>
                    <div>
                        <h1 className={css_footer.iten_title}>
                            Send me a email
                        </h1>
                        <p className={css_footer.iten_subtitle}>
                            desenvolvedorkennedy@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div className={css_footer.footnotes_container}>
                <div className={css_footer.institutional_rights}>
                    Desenvolvedor Kennedy 2024 | All Rights Reserved
                </div>
                <div className={css_footer.others_footnotes_container}>
                    <p className={css_footer.others_footnotes_items}>Terms & Conditions</p>
                    <p className={css_footer.others_footnotes_items}>Privacy Policy</p>
                    <p className={css_footer.others_footnotes_items}>Sitemap</p>
                </div>
            </div>
        </div>
    );
}