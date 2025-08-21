import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', () => {
    it('should can create one to one relation', async () => {
        const wallet = await prismaClient.wallet.create({
            data: {
                id: "2",
                customer_id: "2",
                balance: 1000000
            },
            include: {
                customer: true
            }
        });

        console.info(wallet);
    });
});