import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const ProductGallery = ({ images }: { images: string[] }) => {
    const { theme } = useTheme();

    if (!images || images.length === 0) return null;

    // Pad the array to 6 images to ensure the grid always looks like the requested hierarchical bento box
    const displayImages = [...images];
    while (displayImages.length < 6) {
        displayImages.push(images[displayImages.length % images.length]);
    }

    const getBentoClasses = (index: number) => {
        // Hierarchical Grid layout matching the requested sketch
        // Based on a 3-column grid structure
        if (index === 0) return "md:col-span-2 md:row-span-2"; // Large Top-Left
        if (index === 1) return "md:col-span-1 md:row-span-1"; // Top-Right (top)
        if (index === 2) return "md:col-span-1 md:row-span-1"; // Top-Right (bottom)
        if (index === 3) return "md:col-span-1 md:row-span-1"; // Bottom Row left
        if (index === 4) return "md:col-span-1 md:row-span-1"; // Bottom Row center
        if (index === 5) return "md:col-span-1 md:row-span-1"; // Bottom Row right
        return "md:col-span-1 md:row-span-1";
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] lg:auto-rows-[300px]">
            {displayImages.slice(0, 6).map((img, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
                    className={`relative overflow-hidden rounded-3xl group border-2 flex items-stretch justify-stretch ${getBentoClasses(idx)} ${
                        theme === 'dark' ? 'border-dark-bg bg-[#1a1a1a] shadow-lg shadow-black/40' : 'border-white bg-gray-50 shadow-xl shadow-brand-green-500/5'
                    }`}
                >
                    <img 
                        src={img} 
                        alt={`Project visual ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                    />
                    
                    {/* Subtle Overlay on hover */}
                    <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none opacity-0 group-hover:opacity-100 ${
                        theme === 'dark' ? 'bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent' : 'bg-gradient-to-t from-black/20 via-transparent to-transparent'
                    }`} />
                </motion.div>
            ))}
        </div>
    );
};
