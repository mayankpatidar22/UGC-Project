import { UploadIcon, XIcon } from "lucide-react";
import type { UploadZoneProps } from "../types";

const UploadZone = ({
    label,
    file,
    onClear,
    onChange,
}: UploadZoneProps) => {
    return (
        <div className="relative group">
            <div
                className={`
                    relative h-64 rounded-2xl border-2 border-dashed
                    transition-all duration-300
                    flex flex-col items-center justify-center
                    p-6 overflow-hidden

                    ${
                        file
                            ? `
                                border-violet-500/50
                                bg-violet-50
                                dark:bg-violet-500/5
                            `
                            : `
                                border-slate-300
                                bg-slate-50
                                hover:border-violet-400
                                hover:bg-violet-50

                                dark:border-white/10
                                dark:bg-white/2
                                dark:hover:border-violet-500/30
                                dark:hover:bg-white/5
                            `
                    }
                `}
            >
                {file ? (
                    <>
                        {/* Image Preview */}
                        <img
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            className="
                                absolute inset-0
                                w-full h-full
                                object-cover
                                rounded-xl
                                opacity-60
                            "
                        />

                        {/* Remove Button */}
                        <div
                            className="
                                absolute inset-0
                                flex items-center justify-center
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                bg-black/40
                                rounded-xl
                                backdrop-blur-sm
                            "
                        >
                            <button
                                type="button"
                                onClick={onClear}
                                className="
                                    p-2 rounded-full
                                    bg-white/20
                                    hover:bg-red-500/20
                                    text-white
                                    hover:text-red-400
                                    transition-colors
                                "
                            >
                                <XIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* File Name */}
                        <div
                            className="
                                absolute bottom-4 left-4 right-4
                                bg-black/60
                                backdrop-blur-md
                                p-3 rounded-lg
                                border border-white/10
                            "
                        >
                            <p className="text-sm font-medium truncate text-white">
                                {file.name}
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-center justify-center">
                            
                            {/* Upload Icon */}
                            <div
                                className="
                                    w-16 h-16
                                    rounded-full
                                    flex items-center justify-center
                                    mb-4
                                    bg-slate-200
                                    text-slate-500
                                    group-hover:scale-110
                                    group-hover:bg-violet-100
                                    group-hover:text-violet-600
                                    transition-all duration-300

                                    dark:bg-white/5
                                    dark:text-gray-400
                                    dark:group-hover:bg-violet-500/10
                                    dark:group-hover:text-violet-400
                                "
                            >
                                <UploadIcon className="w-8 h-8" />
                            </div>

                            {/* Label */}
                            <h3
                                className="
                                    text-lg
                                    font-semibold
                                    mb-2
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                {label}
                            </h3>

                            {/* Description */}
                            <p
                                className="
                                    text-sm
                                    text-slate-500
                                    dark:text-gray-400
                                    text-center
                                    max-w-[200px]
                                "
                            >
                                Drag & drop or click to upload
                            </p>

                            {/* File Input */}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={onChange}
                                className="
                                    absolute inset-0
                                    w-full h-full
                                    opacity-0
                                    cursor-pointer
                                "
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default UploadZone;