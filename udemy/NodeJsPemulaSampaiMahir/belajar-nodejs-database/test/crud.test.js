import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', () => {
    it('should be able to create customer', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "yan",
                email: "yan@pzn.com",
                name: "yan",
                phone: "0987654321"
            }
        });

        expect(customer.id).toBe("yan");
        expect(customer.email).toBe("yan@pzn.com");
        expect(customer.name).toBe("yan");
        expect(customer.phone).toBe("0987654321");
    });

    it('should be able to update customer', async () => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "Yan Noval",
            },
            where: {
                id: "yan"
            }
        });

        expect(customer.id).toBe("yan");
        expect(customer.email).toBe("yan@pzn.com");
        expect(customer.name).toBe("Yan Noval");
        expect(customer.phone).toBe("0987654321");
    });

    it('should be able to read customer', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "yan"
            }
        });

        expect(customer.id).toBe("yan");
        expect(customer.email).toBe("yan@pzn.com");
        expect(customer.name).toBe("Yan Noval");
        expect(customer.phone).toBe("0987654321");
    });

    it('should be able to delete customer', async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: "yan"
            }
        });

        expect(customer.id).toBe("yan");
        expect(customer.email).toBe("yan@pzn.com");
        expect(customer.name).toBe("Yan Noval");
        expect(customer.phone).toBe("0987654321");
    });
});