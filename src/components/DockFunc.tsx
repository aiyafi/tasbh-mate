"use client"

import * as React from "react"
import {
    Moon,
    Sun,
    CalendarIcon,
    HomeIcon,
    BarChartIcon,
    SettingsIcon,
    HelpCircleIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { motion } from "motion/react" // Keep if this is your intended import
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger as DialogTriggerComponent,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { toast } from "sonner"

const DATA = {
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home", isComplete: true },
        { href: "#", icon: CalendarIcon, label: "Goals", isComplete: false },
        { href: "#", icon: BarChartIcon, label: "Stats", isComplete: false },
        { href: "#", icon: SettingsIcon, label: "Settings", isComplete: false },
        { href: "#", icon: HelpCircleIcon, label: "❔", isComplete: true },
    ],
}

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [, setIsTouch] = React.useState(false)

    React.useEffect(() => {
        // Ensure window exists before accessing matchMedia
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
            setIsTouch(true)
        }
    }, [])

    // Motion animation
    const dockAnimation = {
        hidden: { y: 100, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2
            }
        }
    }

    const handleNavItemClick = (item: typeof DATA.navbar[0]) => {
        if (!item.isComplete && item.label !== "Home" && item.label !== "❔") {
            toast.info(`${item.label} feature coming soon!`, {
                position: "top-center",
                duration: 3000,
            });
        }
    };

    return (
        <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4"
            initial="hidden"
            animate="show"
            variants={dockAnimation}>
            <TooltipProvider>
                <Dock direction="middle">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label}>
                            {item.label === "❔" ? (
                                <Dialog>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <DialogTriggerComponent asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className={cn(
                                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                                        "size-12 rounded-full"
                                                    )}
                                                >
                                                    <item.icon className="size-4" />
                                                </Button>
                                            </DialogTriggerComponent>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <span>{item.label}</span>
                                        </TooltipContent>
                                    </Tooltip>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="text-lg md:text-xl font-semibold">Credits</DialogTitle>
                                            <DialogDescription asChild>
                                                <div className="space-y-4 py-4 text-sm md:text-base lg:text-lg">
                                                    <div className="mb-2">
                                                        Crafted with a bit of ✨ magic ✨ and ❤️ by
                                                        <a
                                                            href="https://yafff.tech"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-500 hover:cursor-help ml-1"
                                                        >
                                                            K9Fox
                                                        </a>
                                                    </div>
                                                    <div className="p-4 rounded-lg">
                                                        <div className="font-semibold text-sm md:text-base lg:text-lg">Cooked up with:</div>
                                                        <ul className="list-disc list-inside ml-4 text-sm md:text-base lg:text-lg">
                                                            <li>🚀 Next.js + TypeScript</li>
                                                            <li>🎨 Tailwind CSS</li>
                                                            <li>🔮 shadcn/ui</li>
                                                            <li>🖥️ VS Code + Copilot saves</li>
                                                        </ul>
                                                    </div>
                                                    <div className="mt-4 text-sm md:text-base lg:text-lg">
                                                        Shoutout to the devs makin&apos; the web go brrr 💜
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        {item.isComplete ? (
                                            <Link
                                                href={item.href}
                                                aria-label={item.label}
                                                className={cn(
                                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                                    "size-12 rounded-full"
                                                )}
                                            >
                                                <item.icon className="size-4" />
                                            </Link>
                                        ) : (
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className={cn(
                                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                                    "size-12 rounded-full"
                                                )}
                                                onClick={() => handleNavItemClick(item)}
                                            >
                                                <item.icon className="size-4" />
                                            </Button>
                                        )}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span>{item.label}</span>
                                    </TooltipContent>
                                </Tooltip>
                            )}
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full py-2" />
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                                    className="relative rounded-full"
                                >
                                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>Theme</span>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </motion.div>
    )
}