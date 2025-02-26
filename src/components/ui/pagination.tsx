import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="mx-auto flex w-full justify-center gap-2">
            <Button variant={'noShadow'} onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}>
                <ChevronLeft className="w-4 h-4" />
                Previous
            </Button>
            <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button onClick={() => onPageChange(index + 1)} key={index} variant={'noShadow'} className={cn(currentPage === index + 1 && 'bg-black text-white')}>
                        {index + 1}
                    </Button>
                ))}
            </div>
            <Button variant={'noShadow'} onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}>
                Next
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default Pagination;