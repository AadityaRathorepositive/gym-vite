import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benifits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim. Feugiat cursus velit vitae adipiscing."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Neque adipiscing amet amet enim. Feugiat cursus velit vitae adipiscing."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Neque adipiscing amet amet enim. Feugiat cursus velit vitae adipiscing."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benifits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* HEADER */}
            <motion.div className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to 
                    get you to your ultimate fitness goals with ease. We provide true
                     care into each and every member.
                </p>
            </motion.div>

            {/* BENIFITS */}
            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            >
                {/* BENIFIT 1 */}
                {benifits.map((benifit: BenefitType) => (
                    <Benefit
                    key={benifit.title}
                    icon={benifit.icon}
                    title={benifit.title}
                    description={benifit.description}
                    setSelectedPage={setSelectedPage}
                     />
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Benifits