import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    { name: 'Frosty AI Agent', href: '/products/frosty-ai' },
    { name: 'Voice AI Agent', href: '/products/voice-ai' },
    { name: 'WhatsApp Agents', href: '/products/whatsapp-agents' },
    { name: 'LinkedIn Automation', href: '/products/linkedin-automation' },
    { name: 'ERPNext AI Modules', href: '/products/erpnext-ai' },
    { name: 'Hiyring', href: '/products/hiyring' },
    { name: 'Vedashi', href: '/products/vedashi' },
];

const ACCENT_DARK = '#B07552';

const OurProjectsBanner = () => {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLElement>(null);
    const items = [...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS];

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo('.projects-section-title',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 80%' } }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative overflow-hidden pt-10 pb-6 md:pt-14 md:pb-8 transition-colors duration-300 ${
                theme === 'dark' ? 'bg-dark-bg' : 'bg-transparent'
            }`}
        >
            {/* Section Title */}
            <div className="projects-section-title text-center mb-10">
                <h3 className={`text-2xl md:text-4xl font-light mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-dark-text' : 'text-gray-900'
                }`}>
                    Powering Innovation with{' '}
                    <span className="font-semibold" style={{ color: theme === 'dark' ? '#bf8440' : ACCENT_DARK }}>
                        Our Products
                    </span>
                </h3>
                <p className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-dark-text-muted' : 'text-gray-400'
                }`}>
                    AI-driven solutions built to scale your business
                </p>
            </div>

            {/* Fade edges */}
            <div className={`absolute left-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none ${
                theme === 'dark'
                    ? 'bg-gradient-to-r from-dark-bg to-transparent'
                    : 'bg-gradient-to-r from-[#FDFBF7] to-transparent'
            }`} />
            <div className={`absolute right-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none ${
                theme === 'dark'
                    ? 'bg-gradient-to-l from-dark-bg to-transparent'
                    : 'bg-gradient-to-l from-[#FDFBF7] to-transparent'
            }`} />

            {/* Scrolling text strip */}
            <div
                className="flex items-center gap-0 py-6 animate-marquee-projects"
                style={{ width: 'max-content' }}
            >
                {items.map((project, i) => (
                    <div key={`${project.name}-${i}`} className="flex items-center gap-0 flex-shrink-0">
                        <Link
                            to={project.href}
                            className={`
                                px-6 md:px-8 text-lg md:text-xl font-bold tracking-wide whitespace-nowrap
                                transition-all duration-300 hover:scale-105 transform
                                ${theme === 'dark'
                                    ? 'text-dark-text/70 hover:text-dark-accent'
                                    : 'text-[#5D5046] hover:text-[#B07552]'
                                }
                            `}
                            style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                            {project.name}
                        </Link>
                        {/* Diamond separator */}
                        <span className={`text-xs flex-shrink-0 ${
                            theme === 'dark' ? 'text-dark-accent/50' : 'text-[#B07552]/40'
                        }`}>
                            ◆
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurProjectsBanner;
