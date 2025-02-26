import { Input } from '@/components/ui/input';
import { Search, EyeOff, Eye } from 'lucide-react';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface IUserSearchFilterProps {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    filterStatus: 'all' | 'active' | 'blocked';
    setFilterStatus: (filterStatus: 'all' | 'active' | 'blocked') => void;
    showBalance: boolean;
    setShowBalance: (showBalance: boolean) => void;
}

const UserSearchFilter: FC<IUserSearchFilterProps> = ({ searchTerm, setSearchTerm, filterStatus, setFilterStatus, showBalance, setShowBalance }) => {
    return (
        <div className="card-white p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex-1">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Search by name, phone, or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="neo-input pl-12 w-full"
                        />
                    </div>
                </div>

                <div className="flex gap-3">
                    <Select
                        value={filterStatus}
                        onValueChange={(value) => setFilterStatus(value as 'all' | 'active' | 'blocked')}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="blocked">Blocked</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button
                        onClick={() => setShowBalance(!showBalance)}
                        className="bg-white"
                    >
                        {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UserSearchFilter;