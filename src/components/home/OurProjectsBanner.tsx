import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Bot, Mic, MessageSquare, Linkedin, Database, Video, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        name: 'Frosty AI Agent',
        icon: Bot,
        tagline: 'Automate Customer Support',
        description: 'Empower your support team with a next-gen AI agent that understands context, sentiment, and intent. Resolve up to 80% of inquiries instantly.',
        href: '/products/frosty-ai',
        externalLink: 'https://bot.frostrek.com',
        gradient: 'from-[#B07552]/10 to-[#8A5A35]/15',
        stats: ['80% Automated Resolutions', '24/7 Availability']
    },
    {
        name: 'Voice AI Agent',
        icon: Mic,
        tagline: 'Revolutionize Your Call Center',
        description: 'Deploy low-latency voice AI agents that handle inbound support and outbound sales calls with natural, human-like fluidity.',
        href: '/products/voice-ai',
        externalLink: 'https://example.com/voice-ai',
        gradient: 'from-[#D4BB75]/10 to-[#BFA45E]/15',
        stats: ['50% Cost Reduction', '1.2s Ultra-Low Latency']
    },
    {
        name: 'WhatsApp Automation',
        icon: MessageSquare,
        tagline: 'Engage Where It Matters',
        description: 'Turn conversations into revenue. Automate notifications, support, and sales directly in WhatsApp with official API integration.',
        href: '/products/whatsapp-agents',
        externalLink: 'https://whatsapp.frostrek.com',
        gradient: 'from-[#C48F71]/10 to-[#B07552]/15',
        stats: ['98% Open Rate', '5x Higher Conversion']
    },
    {
        name: 'Hiyring.com',
        icon: Video,
        tagline: 'AI-Powered Hiring Platform',
        description: 'Revolutionize recruitment with autonomous AI video interviews. Screen thousands of candidates in minutes and reduce time-to-hire significantly.',
        href: '/products/hiyring',
        externalLink: 'https://hiyring.com',
        gradient: 'from-[#E0CC94]/10 to-[#D4BB75]/15',
        stats: ['85% Reduced Time-to-Hire', '1000+ Candidates/Hour']
    },
    {
        name: 'Vedashi',
        icon: Leaf,
        tagline: 'Modern Ayurvedic Wellness',
        description: 'A modern wellness brand rooted in the timeless principles of Ayurveda, delivering holistic healing through clinically validated formulations.',
        href: '/products/vedashi',
        externalLink: 'https://vedashi.com',
        gradient: 'from-[#B07552]/10 to-[#D4BB75]/15',
        stats: ['250K+ Protocols Delivered', '98% Client Satisfaction']
    },
    {
        name: 'LinkedIn Automation',
        icon: Linkedin,
        tagline: 'B2B Lead Generation',
        description: 'Accelerate your business growth with intelligent, personalized LinkedIn outreach campaigns designed to maximize your network.',
        href: '/products/linkedin-automation',
        externalLink: 'https://example.com/linkedin',
        gradient: 'from-[#8A5A35]/10 to-[#6E4629]/15',
        stats: ['Increase Lead Flow', 'Targeted Outreach']
    },
    {
        name: 'ERPNext AI Modules',
        icon: Database,
        tagline: 'Smart Enterprise Resource Planning',
        description: 'Supercharge your ERPNext implementation with intelligent modules for predictive analytics, smart inventory, and automated workflows.',
        href: '/products/erpnext-ai',
        externalLink: 'https://example.com/erpnext',
        gradient: 'from-[#D4BB75]/10 to-[#B07552]/15',
        stats: ['Predictive Analytics', 'Workflow Automation']
    }
];

const ACCENT_DARK = '#B07552';

const OurProjectsBanner = () => {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Reliable Autoplay
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
        }, 4000); // changes slide every 4 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo('.projects-header',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 80%' } }
            );
            gsap.fromTo('.carousel-container',
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 75%' } }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    };

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section
            ref={sectionRef}
            className={`relative py-16 md:py-24 transition-colors duration-300 ${
                theme === 'dark' ? 'bg-dark-bg' : 'bg-[#FDFBF7]'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="projects-header text-center mb-12 md:mb-16">
                    <h2 className={`text-sm md:text-base font-semibold tracking-wider uppercase mb-3 ${
                        theme === 'dark' ? 'text-dark-accent' : 'text-[#B07552]'
                    }`}>
                        Our Featured Innovations
                    </h2>
                    <h3 className={`text-3xl md:text-5xl font-light mb-4 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-dark-text' : 'text-primary'
                    }`}>
                        Powering Scale with{' '}
                        <span className="font-semibold" style={{ color: theme === 'dark' ? '#bf8440' : ACCENT_DARK }}>
                            AI & Technology
                        </span>
                    </h3>
                    <p className={`max-w-2xl mx-auto text-base md:text-lg transition-colors duration-300 ${
                        theme === 'dark' ? 'text-dark-text-muted' : 'text-muted'
                    }`}>
                        Explore our suite of intelligent solutions designed to transform 
                        customer support, operations, and enterprise efficiency.
                    </p>
                </div>

                {/* Carousel Container */}
                <div 
                    className="carousel-container relative max-w-5xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl transition-all duration-300 border ${
                        theme === 'dark' 
                            ? 'bg-dark-card border-dark-accent/20' 
                            : 'bg-white border-[#B07552]/10 shadow-[0_8px_32px_rgba(176,117,82,0.08)]'
                    }`}>
                        {/* Slides */}
                        <div 
                            className="flex transition-transform duration-500 ease-in-out h-full"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {PROJECTS.map((project, idx) => {
                                const IconComponent = project.icon;
                                return (
                                    <div key={idx} className={`w-full h-full flex-shrink-0 flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                        {/* Visual Side */}
                                        <div className={`w-full md:w-5/12 min-h-[250px] md:min-h-[400px] flex flex-col items-center justify-center p-8 relative overflow-hidden group/visual bg-gradient-to-br ${project.gradient}`}>
                                            {/* Dynamic background elements */}
                                            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 rounded-full mix-blend-overlay opacity-40 animate-pulse bg-white blur-3xl transition-transform duration-1000 group-hover/visual:scale-110"></div>
                                            <div className="absolute bottom-[-10%] left-[-20%] w-56 h-56 rounded-full mix-blend-overlay opacity-30 bg-black blur-3xl transition-transform duration-1000 group-hover/visual:scale-110"></div>
                                            
                                            {/* Watermark shape matched to product */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none overflow-hidden transition-transform duration-700 group-hover/visual:scale-105 group-hover/visual:rotate-[-5deg]">
                                                <IconComponent className="w-96 h-96 lg:w-[32rem] lg:h-[32rem] text-black dark:text-white" />
                                            </div>

                                            {/* Floating mini icons for texture */}
                                            <div className="absolute top-[15%] left-[15%] opacity-20 animate-bounce" style={{ animationDuration: '3.5s' }}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="absolute bottom-[20%] right-[15%] opacity-20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1s' }}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute top-[45%] right-[12%] opacity-15 animate-ping" style={{ animationDuration: '5s' }}>
                                                <div className="w-3 h-3 rounded-full bg-white"></div>
                                            </div>

                                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>

                                            <div className="relative z-10 flex flex-col items-center text-center">
                                                
                                                {/* Logo / Icon Highlight */}
                                                <div className={`w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl transition-all duration-500 transform group-hover/visual:-translate-y-2 group-hover/visual:scale-105 border-2 ${
                                                    theme === 'dark' 
                                                        ? 'bg-dark-bg/50 border-dark-accent/40 shadow-dark-accent/20 backdrop-blur-md' 
                                                        : 'bg-white/70 border-[#B07552]/40 shadow-[#B07552]/20 backdrop-blur-md'
                                                }`}>
                                                    <div className={`absolute inset-0 rounded-[2rem] opacity-40 bg-gradient-to-tr ${project.gradient} mix-blend-multiply`}></div>
                                                    <IconComponent className={`relative z-10 w-12 h-12 md:w-16 md:h-16 drop-shadow-md transition-transform duration-500 group-hover/visual:scale-110 ${theme === 'dark' ? 'text-dark-text' : 'text-[#B07552]'}`} />
                                                </div>

                                                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className={`block cursor-pointer hover:underline text-3xl md:text-4xl font-extrabold drop-shadow-lg mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Raleway', sans-serif" }}>
                                                    {project.name.split(' ')[0]}
                                                </a>
                                                
                                                <div className="hidden md:flex gap-3 mt-2">
                                                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-dark-accent/60' : 'bg-[#B07552]/40'}`}></span>
                                                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse delay-75 ${theme === 'dark' ? 'bg-dark-accent/60' : 'bg-[#B07552]/40'}`}></span>
                                                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse delay-150 ${theme === 'dark' ? 'bg-dark-accent/60' : 'bg-[#B07552]/40'}`}></span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Content Side */}
                                        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                                            <div className="mb-2">
                                                <span className={`text-sm font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-dark-accent' : 'text-[#B07552]'}`}>
                                                    Featured Product
                                                </span>
                                            </div>
                                            <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className={`block cursor-pointer hover:underline text-2xl md:text-4xl font-bold mb-4 ${
                                                theme === 'dark' ? 'text-dark-text' : 'text-primary'
                                            }`}>
                                                {project.name}
                                            </a>
                                            <p className={`text-base md:text-lg mb-8 leading-relaxed ${
                                                theme === 'dark' ? 'text-dark-text-muted' : 'text-muted'
                                            }`}>
                                                {project.description}
                                            </p>
                                            
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                {project.stats.map((stat, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${theme === 'dark' ? 'text-dark-accent' : 'text-[#B07552]'}`} />
                                                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-dark-text-muted' : 'text-muted'}`}>
                                                            {stat}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                                <div className="flex gap-4 items-center">
                                                    <a
                                                        href={project.externalLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                                                            theme === 'dark' 
                                                                ? 'bg-dark-accent text-dark-bg hover:bg-[#a67236] hover:shadow-lg hover:shadow-dark-accent/20' 
                                                                : 'bg-[#B07552] text-white hover:bg-[#8A5A35] hover:shadow-lg hover:shadow-[#B07552]/20'
                                                        }`}
                                                    >
                                                        Visit Website
                                                        <ArrowRight className="w-4 h-4" />
                                                    </a>
                                                    <Link to={project.href} className={`text-sm font-semibold hover:underline ${theme === 'dark' ? 'text-dark-accent' : 'text-[#B07552]'}`}>
                                                        View Details
                                                    </Link>
                                                </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrev}
                            className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 border ${
                                theme === 'dark' 
                                    ? 'bg-dark-bg/80 text-dark-text border-dark-accent/20 hover:bg-dark-accent hover:text-dark-bg backdrop-blur-sm' 
                                    : 'bg-white/90 text-primary border-[#B07552]/20 hover:bg-[#B07552] hover:text-white shadow-md backdrop-blur-sm'
                            }`}
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 border ${
                                theme === 'dark' 
                                    ? 'bg-dark-bg/80 text-dark-text border-dark-accent/20 hover:bg-dark-accent hover:text-dark-bg backdrop-blur-sm' 
                                    : 'bg-white/90 text-primary border-[#B07552]/20 hover:bg-[#B07552] hover:text-white shadow-md backdrop-blur-sm'
                            }`}
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>

                    {/* Progress indicators */}
                    <div className="flex justify-center items-center gap-2 mt-8">
                        {PROJECTS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleDotClick(idx)}
                                className={`transition-all duration-300 rounded-full ${
                                    activeIndex === idx 
                                        ? `w-8 h-2 ${theme === 'dark' ? 'bg-dark-accent' : 'bg-[#B07552]'}` 
                                        : `w-2 h-2 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-500' : 'bg-[#C48F71]/30 hover:bg-[#C48F71]/60'}`
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProjectsBanner;
