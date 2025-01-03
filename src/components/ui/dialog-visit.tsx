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
        const visited = localStorage.getItem('visited');
        if(!visited){
            setIsOpen(true);
            localStorage.setItem('visited', 'true');
        }
    },[]);

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
                    <h3 className='text-feuGold text-lg'>
                        This website is available in PC only. Please wait for the mobile version to be released soon. In the meantime, feel free to
                        <a href="mailto:xylacap@gmail.com?subject=Subject%20Here&body=Body%20Here" className='font-bold underline'> contact me</a> if you have more questions. 
                    </h3>
                    <DialogFooter>
                        <Button className='bg-feuGreen text-feuGold border-none hover:bg-feuGold hover:text-feuGreen ' onClick={() => setIsOpen(false)}>Got it!</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}