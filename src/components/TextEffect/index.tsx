import { TypeAnimation } from 'react-type-animation';

export default function TextEffect() {
    return (
        <TypeAnimation
            sequence={[
                'Network Analyst',
                1500,
                'DevOps',
                1500,
                'Developer',
                1500,
                'Frontend',
                1500,
                'Backend',
                1500
            ]}
            speed={50}
            className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
            repeat={Infinity}
        />
    );
};