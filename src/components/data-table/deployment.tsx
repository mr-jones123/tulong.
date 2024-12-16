
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
export default function Deployment() {
    return (
        <div className="flex items-center space-x-5">
            <Avatar className="rounded-none">
                <AvatarImage src="/vercel.jpg" />
                <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div>
                <h3 className="font-bold text-sm">Deployment</h3>
                <p className="text-sm">This resource can deploy your application. </p>
            </div>
        </div>
    );
}