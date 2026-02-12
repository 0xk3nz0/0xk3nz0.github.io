import { useEffect } from "react";
import { StaggerContainer, StaggerItem } from "../components/StaggerComponent";

const certifications = [
  {
    href: 'https://drive.google.com/file/d/1ge1tr9cnL2b2_KPFb2NOGb__PYQ8QEek',
    title: 'Python for data science',
    date: 'mar 2024',
    source: '[1337BG]',
  },
  {
    href: 'https://drive.google.com/file/d/1Y2r0SDz2iAUH7eFkZ8XBpvadZfUicomp',
    title: 'CSS crash course',
    date: 'sep 2022',
    source: '[udemy]',
  },
  {
    href: 'https://drive.google.com/file/d/1FfXlmyt7rftBGWPJZvrvPJtvsVn5dNl-',
    title: 'C programming',
    date: 'jul 2022',
    source: '[codecademy]',
  },
  {
    href: 'https://drive.google.com/file/d/1PY0l-8ei91iDxwR-4Y-O-LyH3bXR2RqJ',
    title: 'Offensive Pentesting',
    date: 'jul 2021',
    source: '[THM]',
  },
  {
    href: 'https://drive.google.com/file/d/1i-mnbhSEhf3-kaHF5ZUJbGpGuYzZGXbk',
    title: 'pre security',
    date: 'jul 2021',
    source: '[THM]',
  },
  {
    href: 'https://drive.google.com/file/d/1OpgdFuPkMqqBnL6T71eMdk03aaFQF-Zm',
    title: 'web fundamentals',
    date: 'jul 2021',
    source: '[THM]',
  },
  {
    href: 'https://drive.google.com/file/d/1SMizLyQiL2_cY41vE11m8v34Ya5Uk-o0',
    title: 'comptia pentest+',
    date: 'jul 2021',
    source: '[THM]',
  },
  {
    href: 'https://drive.google.com/file/d/1t35FX8W9dyh8lh-5E8R-yLzDu7n59PsM',
    title: 'complete beginner',
    date: 'jul 2021',
    source: '[THM]',
  },
  {
    href: 'https://drive.google.com/file/d/1_OLMddt9IR00dTDXKMZ_iE5wQoLagn08',
    title: 'full stack development track',
    date: 'aug 2019',
    source: '[udacity]',
  },
];

export default function Certifications() {
  useEffect(() => {
    window.document.title = "Kenzō's Certifications";
  }, [])

  return (
    <StaggerContainer className="w-full max-w-4xl px-4">
      {certifications.map((cert, index) => (
        <StaggerItem key={index} className="mb-3 sm:mb-6">
          <a href={cert.href} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-1 m-2 sm:m-5 cursor-pointer group">
              <i className="ph ph-certificate text-strong mr-2 sm:mr-3 text-base sm:text-xl"></i>
              <p className="text-text-strong font-mono font-normal text-sm sm:text-base uppercase">{cert.title}</p>
              <span className="text-text-weak font-mono font-normal text-xs sm:text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 hidden sm:inline">
                _ {cert.date} @ {cert.source}
              </span>
            </div>
          </a>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}