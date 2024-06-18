import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { CONTACT } from "../constants"
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./css/contact.css"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b boder-netral-900 pb-20">
        <motion.h1 
        whileInView={{opcaity: 1, y: 0}}
        initial={{opcaity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-10 text-center text-4xl"
        >Get in Touch
        </motion.h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <div className='contact-icons'>
                
                
            <motion.a 
            whileInView={{opcaity: 1, x: 0}}
            initial={{opcaity: 0, x: -100}}
            transition={{duration: 1}}
            href={CONTACT.Linkedin}><p className="my-4"><FontAwesomeIcon icon={faLinkedinIn} size='lg' /></p> 
            </motion.a>
            <motion.a 
            whileInView={{opcaity: 1, x: 0}}
            initial={{opcaity: 0, x: 100}}
            transition={{duration: 1}}
            href={`mailto:${CONTACT.email}`}><p className="my-4"><FontAwesomeIcon icon={faEnvelope} size='lg' /></p> 
            </motion.a>
            </div>
            

        </div>
    </div>
  )
}

export default Contact
