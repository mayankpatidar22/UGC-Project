import { assets } from '../assets/assets';
import { footerLinks } from '../assets/dummy-data';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            className="
                bg-slate-50
                dark:bg-white/6
                border-t
                border-slate-200
                dark:border-white/6
                pt-10
                text-slate-600
                dark:text-gray-300
                transition-colors duration-300
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-6">

                <div
                    className="
                        flex flex-col md:flex-row
                        items-start justify-between
                        gap-10 py-10
                        border-b
                        border-slate-200
                        dark:border-white/10
                    "
                >

                    {/* Logo + Description */}
                    <div>
                        <img
                            src={assets.logo}
                            alt="logo"
                            className="h-8"
                        />

                        <p
                            className="
                                max-w-[410px]
                                mt-6
                                text-sm
                                leading-relaxed
                                text-slate-600
                                dark:text-gray-300
                            "
                        >
                            Create viral UGC in seconds. Upload product
                            images and a model photo — our AI instantly
                            produces professional lifestyle imagery and
                            short-form videos.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">

                        {footerLinks.map((section, index) => (
                            <div key={index}>

                                <h3
                                    className="
                                        font-semibold
                                        text-base
                                        text-slate-900
                                        dark:text-white
                                        md:mb-5
                                        mb-2
                                    "
                                >
                                    {section.title}
                                </h3>

                                <ul
                                    className="
                                        text-sm
                                        space-y-1
                                        text-slate-600
                                        dark:text-gray-400
                                    "
                                >
                                    {section.links.map(
                                        (
                                            link: {
                                                name: string;
                                                url: string;
                                            },
                                            i
                                        ) => (
                                            <li key={i}>
                                                <a
                                                    href={link.url}
                                                    className="
                                                        hover:text-violet-600
                                                        dark:hover:text-white
                                                        transition
                                                    "
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>

                {/* Copyright */}
                <p
                    className="
                        py-4
                        text-center
                        text-sm
                        text-slate-500
                        dark:text-gray-400
                    "
                >
                    © {new Date().getFullYear()} GreatStack. All rights reserved.
                </p>

            </div>
        </motion.footer>
    );
}