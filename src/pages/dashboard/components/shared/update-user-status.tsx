import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { FC } from 'react';

interface IUpdateUserStatusProps {
    status: 'pending' | 'active' | 'blocked';
}

const UpdateUserStatus: FC<IUpdateUserStatusProps> = ({ status }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className={`w-32 ${status === 'pending' ? 'bg-main' : status === 'blocked' ? 'bg-green-500' : 'bg-red-500'
                        } text-white`}
                >
                    {status === 'pending' ? 'Approve' : status === 'active' ? 'Block' : 'Unblock'}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {status === 'pending'
                            ? "This will approve the user's account and grant them access to the platform."
                            : status === 'active'
                                ? "This will block the user's account and prevent them from accessing the platform."
                                : "This will unblock the user's account and restore their access to the platform."
                        }
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button
                            className={`w-32 ${status === 'pending' ? 'bg-main' : status === 'blocked' ? 'bg-green-500' : 'bg-red-500'
                                } text-white`}
                        >
                            {status === 'pending' ? 'Approve' : status === 'active' ? 'Block' : 'Unblock'}
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default UpdateUserStatus;