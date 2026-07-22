import React from 'react';
import { ChevronRight, MapPin, School } from 'lucide-react';
import type { Branch } from '../data/branches';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';


interface BranchCardProps {
  branch: Branch;
  onClick: () => void;
}

export const BranchCard: React.FC<BranchCardProps> = ({ branch, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer block text-left">
      <Card
        hoverEffect
        className="group border border-gray-200 hover:border-primary-200 bg-white/70 backdrop-blur-sm transition-all duration-300"
      >
        <CardContent className="p-5 flex items-center justify-between">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-light-accent text-primary-700 rounded-lg group-hover:bg-primary-700 group-hover:text-white transition-colors duration-300">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 group-hover:text-primary-800 transition-colors duration-200">
                {branch.name}
              </h4>
              <div className="flex items-center text-gray-600 mt-1.5 space-x-1">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-xs font-medium">{branch.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Badge
              variant={branch.status === 'active' ? 'success' : 'neutral'}
              size="sm"
              showDot
            >
              {branch.status === 'active' ? 'Active' : 'Inactive'}
            </Badge>
            <div className="p-1 rounded-full text-gray-500 bg-light-hover group-hover:bg-light-accent group-hover:text-primary-700 transition-colors duration-300">
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
