
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
export default function YouTube() {
    return (
        <div className="flex items-center space-x-5">
            <Avatar className="rounded-none">
                <AvatarImage src="/youtube.png" />
                <AvatarFallback>YT</AvatarFallback>
            </Avatar>
            <div>
                <h3 className="font-bold text-sm">YouTube</h3>
                <p className="text-sm">This resource is a YouTuber with helpful videos. </p>
            </div>
        </div>
    );
}