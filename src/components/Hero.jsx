import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero({ title, subtitle, linkedin_link, github_link }) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4 text-center md:items-start md:text-left">
      <div className="font-extrabold">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">{title}</h1>
        <h2 className="font-medium text-lg sm:text-xl md:text-2xl">
          {subtitle}
        </h2>

        <div className="flex space-x-6 mt-6 text-4xl text-gray-600 dark:text-gray-300 justify-center md:justify-start">          <a
            href={linkedin_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex p-1 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex p-1 hover:text-gray-900 dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
