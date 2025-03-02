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

const DATA = {
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "#", icon: CalendarIcon, label: "Goals" },
        { href: "#", icon: BarChartIcon, label: "Stats" },
        { href: "#", icon: SettingsIcon, label: "Settings" },
        { href: "#", icon: HelpCircleIcon, label: "❔" },
    ],
}

export function ModeToggle({ className }: { className?: string }) {
    const { setTheme, theme } = useTheme()
    const [isTouch, setIsTouch] = React.useState(false)

    React.useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
            setIsTouch(true)
        }
    }, [])

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4">
            <TooltipProvider>
                <Dock direction="middle" disableInteractive={isTouch}>
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
                                            <p>{item.label}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="text-lg md:text-xl font-semibold">Credits</DialogTitle>
                                            <DialogDescription className="space-y-4 py-4 text-sm md:text-base lg:text-lg">
                                                <p className="mb-2">
                                                    Crafted with a bit of ✨ magic ✨ and ❤️ by
                                                    <a href="https://yafff.tech" target="_blank" rel="noopener noreferrer"
                                                        className="text-blue-500 hover:cursor-help ml-1"> K9Fox
                                                    </a>
                                                </p>

                                                <div className="p-4 rounded-lg">
                                                    <p className="font-semibold text-sm md:text-base lg:text-lg">Cooked up with: </p>
                                                    <ul className="list-disc list-inside ml-4 text-sm md:text-base lg:text-lg">
                                                        <li>🚀 Next.js + TypeScript</li>
                                                        <li>🎨 Tailwind CSS</li>
                                                        <li>🔮 shadcn/ui</li>
                                                        <li>🖥️ VS Code + Copilot saves</li>
                                                    </ul>
                                                </div>
                                                <p className="mt-4 text-sm md:text-base lg:text-lg">Shoutout to the devs makin’ the web go brrr 💜</p>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <Tooltip>
                                    <TooltipTrigger asChild>
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
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{item.label}</p>
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
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    )
}