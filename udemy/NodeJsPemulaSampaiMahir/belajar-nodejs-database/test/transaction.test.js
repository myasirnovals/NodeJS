import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', () => {
    it('should can execute sequential transaction', async () => {
        const [yan, derek] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "1",
                    email: "yan@pzn.com",
                    name: "yan",
                    phone: "0987654321"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "2",
                    email: "derek@pzn.com",
                    name: "Derek Westbrook",
                    phone: "1234567890"
                }
            })
        ], {
            timeout: 5
        });

        expect(yan.id).toBe("1");
        expect(derek.id).toBe("2");
    });

    it('should can execute interactive transaction', async () => {
        const [yan, derek] = await prismaClient.$transaction(async (prisma) => {
            const yan = await prisma.customer.create({
                data: {
                    id: "3",
                    email: "yan3@pzn.com",
                    name: "yan",
                    phone: "09876543214"
                }
            });
            const derek = await prisma.customer.create({
                data: {
                    id: "4",
                    email: "derek4@pzn.com",
                    name: "Derek Westbrook",
                    phone: "12345678904"
                }
            });

            return [yan, derek];
        }, {
            timeout: 5
        });

        expect(yan.id).toBe("3");
        expect(derek.id).toBe("4");
    });
});