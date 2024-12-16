
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
export default function OnlineCourse() {
    return (
        <div className="flex items-center space-x-5">
            <Avatar className="rounded-none">
                <AvatarImage src="/coursera.png" />
                <AvatarFallback>CS</AvatarFallback>
            </Avatar>
            <div>
                <h3 className="font-bold text-sm">Online Course</h3>
                <p className="text-sm">This resource is a free online course where you can start learning.</p>
            </div>
        </div>
    );
}