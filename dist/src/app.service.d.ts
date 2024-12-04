export declare class AppService {
    getHello(): string;
    test(): Promise<{
        id: string;
        email: string;
        clerkUserId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
