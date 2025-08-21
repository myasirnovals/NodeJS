import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', () => {
    it('should bw able to create with auto increment primary key', async () => {
        const category = await prismaClient.category.create({
            data: {
                name: "FOOD"
            }
        });

        console.info(category);
        expect(category).toHaveProperty("id");
    });
});