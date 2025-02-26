
export interface IName {
    firstName: string;
    lastName: string;
    fullName?: string;
}


export interface IActiveSession {
    token: string;
    lastLogin: Date;
    deviceInfo: string;
    lastDevice: string;
}


export interface IUser {
    _id: string;
    name: IName;
    email: string;
    phone: string;
    pin: string;
    nid: string;
    role: 'user' | 'agent' | 'admin';
    balance: number;
    income: number;
    status: 'pending' | 'active' | 'blocked';
    activeSession: IActiveSession;
    isLoggedIn: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}       

