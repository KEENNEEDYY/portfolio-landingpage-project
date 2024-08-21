import BriefSlider from "../../../../components/BriefSlider";

export default function Brief() {
    return (
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Reviews <span className="text-yellow-400">briefings</span>
            </h1>
            <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
                <BriefSlider />
            </div>
        </div>
    );
}

