import {prismaClient} from "../src/application/database.js";
import bycript from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "test"
        }
    });
};

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "test",
            password: await bycript.hash("rahasia", 10),
            name: "test",
            token: "test"
        }
    });
};