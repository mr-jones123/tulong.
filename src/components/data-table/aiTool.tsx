
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
export default function AIPlatforms() {
    return (
        <div className="flex items-center space-x-5">
            <Avatar className="rounded-none">
                <AvatarImage src="/claude.png" />
                <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <div>
                <h3 className="font-bold text-sm">AI Platform</h3>
                <p className="text-sm">This resource is an AI platform to automate anything.</p>
            </div>
        </div>
    );
}