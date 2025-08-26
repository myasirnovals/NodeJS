import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', () => {
    it('should can create and select fields', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "7",
                email: "rully@pzn.com",
                phone: "088888888888",
                name: "Rully Nugraha"
            },
            select: {
                id: true,
                name: true
            }
        });

        expect(customer.id).toBe("7");
        expect(customer.name).toBe("Rully Nugraha");
        expect(customer.email).toBeUndefined();
        expect(customer.phone).toBeUndefined();
    });

    it('should can select fields', async () => {
        const customers = await prismaClient.customer.findMany({
            select: {
                id: true,
                name: true
            }
        });

        for (const customer of customers) {
            expect(customer.id).toBeDefined();
            expect(customer.name).toBeDefined();
            expect(customer.email).toBeUndefined();
            expect(customer.phone).toBeUndefined();
        }
    });
});