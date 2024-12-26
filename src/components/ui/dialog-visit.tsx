import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
export default function DialogVisit(){
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem("visited");
        if (!visited) {
            setIsOpen(true);
            localStorage.setItem("visited", "true");
        }
    },);

    return(
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-feuGold">
                        Welcome to weCare!
                    </DialogTitle>
                    <DialogDescription className='text-feuGold italic'>
                        A platform where you can find all additional resources to help you excel in your academic journey.
                    </DialogDescription>
                    <h3 className='text-feuGold text-xl'>
                        This website is an open-source project which means you can contribute to make it better! Feel free to clone the 
                        <a href = "https://github.com/mr-jones123/weCare..git">GitHub repository</a> or 
                        <a href="mailto:xylacap@gmail.com?subject=Subject%20Here&body=Body%20Here">contact me</a> if you have more questions. 
                    </h3>
                    <DialogFooter>
                        <Button onClick={() => setIsOpen(false)}>Got it!</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}