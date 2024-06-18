import { RiReactjsLine } from 'react-icons/ri';
import { SiAmazonaws, SiLinux } from 'react-icons/si';
import { SiTerraform } from 'react-icons/si';
import { SiAnsible } from 'react-icons/si';
import { SiDocker} from 'react-icons/si';
import { SiJenkins } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiGitlab } from 'react-icons/si';
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5}}
      className="my-20 text-center text-4xl"
      >Technologies
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity: 0, x:-100}}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
        >
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAmazonaws className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTerraform className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAnsible className="text-7xl text-black-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJenkins className="text-7xl text-black-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGitlab className="text-7xl text-white-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;