import { FaGithub } from 'react-icons/fa';
import { personalInfo } from '../constants/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(0,245,255,0.1)] py-8">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#a0a0b0] text-sm">
            {personalInfo.name} &copy; {currentYear}
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#a0a0b0] hover:text-[#00f5ff] transition-colors text-sm"
          >
            <FaGithub size={18} />
            dikshanta8080
          </a>
        </div>
      </div>
    </footer>
  );
}
