import { FC, useState } from 'react';
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Wallet } from 'lucide-react';

const RequestCashDialog: FC = () => {
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState(0);


    const handleSubmit = () => {
        console.log(amount);
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full">Request Cash</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Request Cash</DialogTitle>
                    <DialogDescription>
                        Request additional cash from admin when you need more funds. Admin will process within 24 hours.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Label htmlFor="amount">Amount</Label>
                    <div className="relative">
                        <Wallet className="z-10 absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10" />
                        <Input
                            name="amount"
                            onChange={(e) => setAmount(Number(e.target.value))}
                            type="number"
                            id="amount"
                            className="pl-12 w-full"
                            placeholder="Enter amount"
                        />
                    </div>
                </div>
                <DialogFooter className='gap-2'>
                    <DialogClose asChild>
                        <Button variant="neutral">Cancel</Button>
                    </DialogClose>

                    <Button disabled={amount <= 0} onClick={handleSubmit}>Request Cash</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default RequestCashDialog;   