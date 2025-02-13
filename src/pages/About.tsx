import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../assets/images/bg-banner.jpg";
import abtImg from "../assets/images/about-us.png";
import { experts } from "../utils/Experts";
import ExpertCard from "../components/ExpertCard";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <div className="bg-[#111111]">
      {/* HERO SECTION */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full h-auto bg-cover bg-center py-12 md:py-20"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-[60px] text-[35px] text-white font-bold"
          >
            ABOUT <span className="text-[#fa9e1f]">US</span>
          </motion.h1>
          <hr className="text-[#fa9e1f] w-24" />
        </div>
      </motion.div>

      {/* ABOUT US SECTION */}
      <div className="py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center justify-center gap-4 py-3"
        >
          <hr className="w-[50px] border border-[#fa9e1f]" />
          <p className="text-[#fff] text-center uppercase text-sm md:text-base">
            A commercial website that lists wallets, exchanges, and other bitcoin-related info
          </p>
          <hr className="w-[50px] border border-[#fa9e1f]" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-6 px-4 md:px-0 text-justify">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            src={abtImg}
            alt="About Us"
            className="max-w-full md:max-w-[400px] w-full h-auto"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-[#fff] max-w-full md:max-w-[600px] text-center md:text-left"
          >
            <h1 className="text-[24px] md:text-[32px] font-bold mb-4">
              247 <span className="text-[#fa9e1f]">BITOPTION</span>
            </h1>
            <p className="w-full leading-relaxed mb-10 md:mb-7 text-sm md:text-base">
              A place for everyone who wants to simply buy and sell Bitcoins. Deposit funds using
              your Visa/MasterCard or bank transfer. Instant buy/sell of Bitcoins at fair price is
              guaranteed. Nothing extra. Join over 700,000 users from all over the world satisfied
              with our services.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/about"
                className="bg-[#fa9e1f] hover:bg-[#d37d38] font-semibold text-[#fff] py-4 px-24 text-sm md:py-3 md:px-8"
              >
                READ MORE
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* EXPERTS SECTION */}
      <div className="md:py-16 py-7 text-center px-4">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-[#fff] text-[28px] md:text-[40px] font-bold uppercase"
        >
          OUR EXPERTS
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <hr className="w-[50px] border border-[#fa9e1f]" />
          <p className="text-[#fff] text-sm md:text-base">
            A talented team of Cryptocurrency experts based in London
          </p>
          <hr className="w-[50px] border border-[#fa9e1f]" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 bg-black py-8"
        >
          {experts &&
            experts.map((expert, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <ExpertCard expert={expert} />
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* CALL TO ACTION SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full h-auto bg-cover bg-center py-12 md:py-20"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#FFFFFF] text-[20px] md:text-[40px] font-bold mb-4"
          >
            Get Started Today With Bitcoin
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-[14px] text-[#FFFFFF] text-center font-normal leading-5 mb-6"
          >
            Open an account for free and start trading Bitcoins!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="py-3 px-20 md:px-10 bg-[#fa9e1f] hover:bg-[#d37d38] text-[#fff] font-bold text-sm md:text-base"
          >
            REGISTER NOW
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
