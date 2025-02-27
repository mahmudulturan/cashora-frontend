import { Button } from '@/components/ui/button';
import { FC, useState, useEffect } from 'react';
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
    currentPage: number;
}

const Pagination: FC<IPaginationProps> = ({ meta, onPageChange, currentPage }) => {
    const [rememberedTotalPage, setRememberedTotalPage] = useState(meta?.totalPage || 0);

    useEffect(() => {
        if (meta?.totalPage) {
            setRememberedTotalPage(meta.totalPage);
        }
    }, [meta?.totalPage]);

    return (
        <div className="mx-auto flex w-full justify-center gap-2">
            <Button variant={'noShadow'} onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}>
                <ChevronLeft className="w-4 h-4" />
                Previous
            </Button>
            <div className="flex items-center gap-2">
                {Array.from({ length: rememberedTotalPage }, (_, index) => (
                    <Button onClick={() => onPageChange(index + 1)} key={index} variant={'noShadow'} className={cn(currentPage === index + 1 && 'bg-black text-white')}>
                        {index + 1}
                    </Button>
                ))}
            </div>
            <Button variant={'noShadow'} onClick={() => currentPage < rememberedTotalPage && onPageChange(currentPage + 1)}>
                Next
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default Pagination;