import { FaLinkedin, FaGithub} from "react-icons/fa";
import { HiOutlineDocumentText } from 'react-icons/hi';
import BoxSketch from "./BoxSketch"; // adjust path if needed


export default function Hero({ title, subtitle, linkedin_link, github_link}) {
  return (
    <div className="pt-16 flex flex-col min-h-screen items-center justify-center px-24 text-center md:items-start md:text-left text-grey-text">
      <BoxSketch />

      <div className="font-inter">
        <h1 className="font-black text-secondary text-4xl sm:text-5xl md:text-6xl mb-2 md-4 font-extrabold">{title}</h1>
        <h2 className="font-light text-lg sm:text-xl md:text-2xl">
          {subtitle}
        </h2>
        

        <div className="flex space-x-6 mt-6 text-4xl justify-center md:justify-start">          
        <a
            href={linkedin_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex p-1 transition-transform transform hover:-translate-y-1 duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-grey-text hover:text-secondary transition-colors duration-200" />
          </a>
          <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex p-1 transition-transform transform hover:-translate-y-1 duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="text-grey-text hover:text-secondary transition-colors duration-200" />
          </a>
          {/* <a
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex p-1 transition-transform transform hover:-translate-y-1 duration-200"
            aria-label="CV"
          >
            <HiOutlineDocumentText className="text-grey-text hover:text-secondary transition-colors duration-200" />
          </a> */}
        </div>
      </div>
    </div>
  );
}
