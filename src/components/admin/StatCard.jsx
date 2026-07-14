import { ArrowUpRight } from "lucide-react";

const StatCard = ({
    title,
    value,
    icon: Icon,
    color = "from-blue-500 to-cyan-500",
    subtitle = "",
}) => {

    return (

        <div
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/30
                hover:shadow-2xl
                hover:shadow-blue-500/10
            "
        >

            {/* Glow */}

            <div
                className={`
                    absolute
                    -right-12
                    -top-12
                    h-40
                    w-40
                    rounded-full
                    bg-gradient-to-br
                    ${color}
                    opacity-20
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:scale-125
                `}
            />

            <div className="relative z-10 flex justify-between">

                <div>

                    <p className="text-sm text-zinc-400">

                        {title}

                    </p>

                    <h1 className="mt-3 text-5xl font-black tracking-tight">

                        {value}

                    </h1>

                    {subtitle && (

                        <div className="mt-5 flex items-center gap-2">

                            <ArrowUpRight
                                size={16}
                                className="text-green-400"
                            />

                            <span className="text-sm text-green-400">

                                {subtitle}

                            </span>

                        </div>

                    )}

                </div>

                <div
                    className={`
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${color}
                        shadow-xl
                    `}
                >

                    <Icon size={32} />

                </div>

            </div>

        </div>

    );

};

export default StatCard;