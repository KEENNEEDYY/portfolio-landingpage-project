import * as css_articles from './css-articles';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import articleImg01 from '../../../../assets/blog1.jpg'
import articleImg02 from '../../../../assets/blog2.jpg'
import articleImg03 from '../../../../assets/blog3.jpg'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

export default function Articles() {
    return (
        <section className={css_articles.section}>
            <h1 className="heading">
                My <span className="text-yellow-400">Articles </span>and inspirations
            </h1>
            <div className={css_articles.container}>
                <div className={css_articles.img_container}>
                    <div className={css_articles.img_sub_container}>
                        <img src={articleImg01} alt="article01" className="object-cover" />
                    </div>
                    <div className={css_articles.article_description}>
                        <div className={css_articles.date_container}>
                            December 10,2023
                        </div>
                        <div className={css_articles.icons_container}>
                            <div className={css_articles.icon_container}>
                                <UserCircleIcon className={css_articles.icon_style} />
                                <p className={css_articles.icon_name}>By Kennedy</p>
                            </div>
                            <div className={css_articles.icon_container}>
                                <ChatBubbleLeftRightIcon className={css_articles.icon_style} />
                                <p className={css_articles.icon_name}>Comments (2)</p>
                            </div>
                        </div>
                        <p className={css_articles.statck_name}>
                            React Development
                        </p>
                    </div>
                </div>
                <div className={css_articles.img_container}>
                    <div className={css_articles.img_sub_container}>
                        <img src={articleImg02} alt="article01" className="object-cover" />
                    </div>
                    <div className={css_articles.article_description}>
                        <div className={css_articles.date_container}>
                            December 15,2023
                        </div>
                        <div className={css_articles.icons_container}>
                            <div className={css_articles.icon_container}>
                                <UserCircleIcon className={css_articles.icon_style} />
                                <p className={css_articles.icon_name}>By Kennedy</p>
                            </div>
                            <div className={css_articles.icon_container}>
                                <ChatBubbleLeftRightIcon className={css_articles.icon_style} />
                                <p className={css_articles.icon_name}>Comments (8)</p>
                            </div>
                        </div>
                        <p className={css_articles.statck_name}>
                            React new Feactures
                        </p>
                    </div>
                </div>
                <div className={css_articles.img_container}>
                    <div className={css_articles.img_sub_container}>
                        <img src={articleImg03} alt="article01" className="object-cover" />
                    </div>
                    <div className={css_articles.article_description}>
                        <div className={css_articles.date_container}>
                            December 25,2023
                        </div>
                        <div className={css_articles.icons_container}>
                            <div className={css_articles.icon_container}>
                                <UserCircleIcon className={css_articles.icon_style} />
                                <p className={css_articles.icon_name}>By Kennedy</p>
                            </div>
                            <div className={css_articles.icon_container}>
                                <ChatBubbleLeftRightIcon className={css_articles.icon_style} />
                                <p className={css_articles.icon_name}>Comments (22)</p>
                            </div>
                        </div>
                        <p className={css_articles.statck_name}>
                            Java 8.0
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}