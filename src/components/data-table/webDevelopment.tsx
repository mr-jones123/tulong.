
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
export default function WebDevelopment() {
    return (
        <div className="flex items-center space-x-5">
            <Avatar className="rounded-none">
                <AvatarImage src="/JavaScript-logo.png" />
                <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
                <h3 className="font-bold text-sm">Web Development</h3>
                <p className="text-sm">This resource is essential for learning web development </p>
            </div>
        </div>
    );
}