import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', () => {
    it('should can using or operator', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                OR: [
                    {category: 'FOOD'},
                    {category: 'DRINK'}
                ]
            },
            orderBy: [
                {name: 'asc'}
            ]
        });

        console.info(products);
        console.info(`total of products ${products.length}`);

        expect(products.length).toBe(5);
        expect(products[0].name).toContain("Aqua");
        expect(products[1].name).toContain("Beras");
    });
});