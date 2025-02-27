import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IPaginationProps {
    meta: {
        page: number;
        limit: number;
        totalData: number;
        totalPage: number;
    } | undefined;
    onPageChange: (page: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ meta, onPageChange }) => {
    return (
        <div className="mx-auto flex w-full justify-center gap-2">
            <Button variant={'noShadow'} onClick={() => meta?.page && meta?.page > 1 && onPageChange(meta?.page - 1)}>
                <ChevronLeft className="w-4 h-4" />
                Previous
            </Button>
            <div className="flex items-center gap-2">
                {Array.from({ length: meta?.totalPage || 0 }, (_, index) => (
                    <Button onClick={() => onPageChange(index + 1)} key={index} variant={'noShadow'} className={cn(meta?.page === index + 1 && 'bg-black text-white')}>
                        {index + 1}
                    </Button>
                ))}
            </div>
            <Button variant={'noShadow'} onClick={() => meta?.page && meta?.page < meta?.totalPage && onPageChange(meta?.page + 1)}>
                Next
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default Pagination;