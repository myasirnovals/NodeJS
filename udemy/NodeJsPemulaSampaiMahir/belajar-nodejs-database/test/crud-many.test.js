import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', () => {
    it('should can create many records', async () => {
        const {count} = await prismaClient.customer.createMany({
            data: [
                {
                    id: "5",
                    email: "budi.santoso@example.com",
                    name: "Budi Santoso",
                    phone: "081234567890"
                },
                {
                    id: "6",
                    email: "citra.lestari@example.com",
                    name: "Citra Lestari",
                    phone: "085678901234"
                }
            ]
        });

        expect(count).toBe(2);
    });

    it('should can update many records', async () => {
        const {count} = await prismaClient.customer.updateMany({
            data: {
                email: "budibudiman@pzn.com"
            },
            where: {
                name: "Budi Santoso"
            }
        });

        expect(count).toBe(1);
    });

    it('should can delete many records', async () => {
        const {count} = await prismaClient.customer.deleteMany({
            where: {
                name: "tidak ada"
            }
        });

        expect(count).toBe(0);
    });

    it('should can read many records', async () => {
        const customers = await prismaClient.customer.findMany({});
        console.log(customers);
        expect(customers.length).toBe(6);
    });
});