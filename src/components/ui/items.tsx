import { Home, Package } from "lucide-react"
export const items = [
    {
        title: "Home",
        icon: (
            <Home className="h-full w-full text-feuGreen dark:text-neutral-300"/>
        ),
        href: "/",
    },
    {
        title: "Resources",
        icon: (
            <Package className="h-full w-full text-feuGreen dark:text-neutral-300"/>
        ),
        href: "/resources",
    }
]
