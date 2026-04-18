import React, { useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { PRODUCT_DATA } from '../../utils/productData';
import { Link } from 'react-router-dom';

const TopMarqueeBanner = () => {
    const { theme } = useTheme();

    const bannerItems = useMemo(() => {
        return Object.entries(PRODUCT_DATA)
            .filter(([path]) => path !== 'generic')
            .map(([path, product]) => ({
                href: path,
                name: product.title,
                externalLink: product.externalLink || '#',
                description: product.subtitle || product.tagline || product.description.substring(0, 50) + '...',
            }));
    }, []);

    // Create enough duplicated content to allow for seamless infinite scrolling
    const repeatedItems = [...Array(4)];

    return (
        <div className={`w-full overflow-hidden border-b z-40 absolute top-20 left-0 right-0 py-2.5 transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-dark-bg/90 backdrop-blur border-dark-accent/20 shadow-md shadow-black/20' 
                : 'bg-white/90 backdrop-blur border-[#B07552]/20 shadow-sm shadow-[#B07552]/5'
        }`}>
            {/* 
                We use animate-marquee-projects if it's in tailwind.config.js, 
                or just standard animate-marquee to scroll left slowly. 
            */}
            <div 
                className="flex whitespace-nowrap animate-marquee-projects hover:[animation-play-state:paused]" 
                style={{ width: 'max-content' }}
            >
                {repeatedItems.map((_, iterationIndex) => (
                    <div key={iterationIndex} className="flex items-center">
                        {bannerItems.map((item, idx) => (
                            <div key={`item-${iterationIndex}-${idx}`} className="flex items-center px-4">
                                <div className="flex items-center group transition-transform duration-300 transform hover:scale-105">
                                    <a 
                                        href={item.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`font-bold uppercase tracking-wide text-sm cursor-pointer hover:underline ${
                                            theme === 'dark' 
                                                ? 'text-dark-accent hover:text-white' 
                                                : 'text-[#B07552] hover:text-[#8A5A35]'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                    <span className={`mx-2 text-sm ${
                                        theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                    }`}>—</span>
                                    <Link to={item.href} className={`text-sm cursor-pointer ${
                                        theme === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'
                                    }`}>
                                        {item.description}
                                    </Link>
                                </div>
                                <span className={`mx-6 text-sm ${
                                    theme === 'dark' ? 'text-dark-accent/30' : 'text-[#B07552]/30'
                                }`}>
                                    ✦
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopMarqueeBanner;
