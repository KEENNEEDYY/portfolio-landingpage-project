import * as css_introduction from '../Introduction/css-introduction';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import aboutImg from '../../../../assets/about.jpg';

export default function About() {
    return (
        <section>
            <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                    <div>
                        <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
                            ABOUT ME
                        </h1>
                        <h2 className="text-[25px] md:text-[35px] 1g:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                            Transforming <span className="text-yellow-400">Visions</span>
                        </h2>
                        <div className="mb-[3rem] flex items-center md: space-x-10">
                            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                            <p className="text-[19px] text-slate-300">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Culpa, cupiditate itaque provident dolore inventore suscipit optio vel doloribus consequuntur nesciunt
                                rem earum.
                            </p>
                        </div>
                        <button className={css_introduction.cv_button}>
                            <p>Download Cv</p>
                            <ArrowDownTrayIcon className={css_introduction.cv_button_icon} />
                        </button>
                    </div>
                    <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                        <img src={aboutImg} alt="user" className="relative z-[11] w-[100%] object-contain" />
                        <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}