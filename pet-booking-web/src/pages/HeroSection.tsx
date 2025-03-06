import { motion } from "framer-motion";

interface HeroSectionProps {
    onNavigate: (section: "booking") => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
    return (
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <motion.img
                src="https://as1.ftcdn.net/v2/jpg/03/05/10/12/1000_F_305101235_t6UjNyoFAppmWrQhJMvQUcpdYNxCfpAP.jpg"
                alt="Dog looking at camera"
                className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.div 
                className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-md">
                    <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                        We care for your furry little loved ones while
                    </h1>
                    <motion.button
                        onClick={() => onNavigate("booking")}
                        className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition cursor-pointer"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Schedule a visit
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
