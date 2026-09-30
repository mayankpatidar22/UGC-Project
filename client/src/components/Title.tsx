import { motion } from "framer-motion";

interface TitleProps {
    title?: string;
    heading?: string;
    description?: string;
}

export default function Title({
    title,
    heading,
    description,
}: TitleProps) {
    return (
        <div className="text-center mb-16">

            {/* Small Title */}
            {title && (
                <motion.p
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 70,
                        mass: 1,
                    }}
                    className="
                        text-sm
                        font-medium
                        text-violet-600
                        dark:text-violet-400
                        uppercase
                        tracking-wide
                        mb-3
                    "
                >
                    {title}
                </motion.p>
            )}

            {/* Heading */}
            {heading && (
                <motion.h2
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 70,
                        mass: 1,
                        delay: 0.1,
                    }}
                    className="
                        text-2xl
                        md:text-4xl
                        font-semibold
                        text-slate-900
                        dark:text-white
                        transition-colors duration-300
                    "
                >
                    {heading}
                </motion.h2>
            )}

            {/* Description */}
            {description && (
                <motion.p
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 70,
                        mass: 1,
                        delay: 0.2,
                    }}
                    className="
                        max-w-md
                        mx-auto
                        text-sm
                        my-3
                        text-slate-500
                        dark:text-gray-400
                        transition-colors duration-300
                    "
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}