import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../assets/images/bg-banner.jpg";
import ServicesCard from "../components/ServicesCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const Services = () => {
  return (
    <div>
      {/* HERO SERVICES */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full h-auto bg-cover bg-center py-12 md:py-20"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          variants={staggerContainer}
          className="flex flex-col justify-between items-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="md:text-[60px] text-[35px] text-white font-bold"
          >
            OUR <span className="text-[#fa9e1f]">SERVICES</span>
          </motion.h1>
          <motion.hr
            variants={fadeInUp}
            className="border-[#fa9e1f] w-24 mt-2"
          />
        </motion.div>
      </motion.div>

      <ServicesCard />

      {/* Call-to-Action Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full h-auto bg-cover bg-center py-12 md:py-20"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          variants={staggerContainer}
          className="flex flex-col justify-between items-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-[#FFFFFF] text-[20px] md:text-[40px] font-bold mb-4"
          >
            Get Started Today With Bitcoin
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-[14px] text-[#FFFFFF] text-center font-normal leading-5 mb-6"
          >
            Open an account for free and start trading Bitcoins!
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/sign-up"
                className="py-3 px-24 md:px-10 bg-[#fa9e1f] text-[#fff] font-bold text-sm md:text-base rounded-md"
              >
                REGISTER NOW
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
