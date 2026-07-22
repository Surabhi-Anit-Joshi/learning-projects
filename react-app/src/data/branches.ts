export interface Branch {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'inactive';
  students: number;
  teachers: number;
  established: number;
  principal: string;
  contact: string;
  email: string;
  code: string;
}

export const mockBranches: Branch[] = [
  {
    id: 'st-agnes',
    name: 'St. Agnes School',
    location: 'Mangalore',
    status: 'active',
    students: 3420,
    teachers: 124,
    established: 1965,
    principal: 'Sr. Maria Goretti',
    contact: '+91 824 2449012',
    email: 'info@stagnesmlr.edu.in',
    code: 'SA-MLR-01',
  },
  {
    id: 'kristu-jayanti',
    name: 'Kristu Jayanti School',
    location: 'Bangalore',
    status: 'active',
    students: 4850,
    teachers: 186,
    established: 1999,
    principal: 'Rev. Fr. Augustine George',
    contact: '+91 80 28465611',
    email: 'contact@kristujayanti.edu.in',
    code: 'KJ-BLR-02',
  },
  {
    id: 'sacred-heart',
    name: 'Sacred Heart School',
    location: 'Kundapura',
    status: 'active',
    students: 2150,
    teachers: 88,
    established: 1980,
    principal: 'Rev. Fr. Stany Tauro',
    contact: '+91 8254 230344',
    email: 'office@shskundapura.org',
    code: 'SH-KND-03',
  },
  {
    id: 'little-flower',
    name: 'Little Flower School',
    location: 'Mysore',
    status: 'active',
    students: 1980,
    teachers: 76,
    established: 1992,
    principal: 'Sr. Jacintha Dsouza',
    contact: '+91 821 2498744',
    email: 'admin@littleflowermysore.in',
    code: 'LF-MYS-04',
  },
];
export type BranchList = Branch[];
