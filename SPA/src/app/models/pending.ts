import { Candidate } from '../models/candidate';

export interface Pending {
    id?: string;
    cand?: Candidate[];
    company: string;
    candidate: string;
    jobOwner: string;
    sendOut: string;
    baseSalary: number;
    feePercent: number;
    status: string;

}