import supertest from "supertest";
import {createTestUser, removeAllTestContacts, removeTestUser} from "./test-util.js";
import {web} from "../src/application/web.js";

describe('POST /api/contacts', () => {
    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });

    it('should can create new contact', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set('Authorization', 'test')
            .send({
                first_name: 'test',
                last_name: 'test',
                email: 'test@pzn.com',
                phone: '0808997888876',
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.first_name).toBe('test');
        expect(result.body.data.last_name).toBe('test');
        expect(result.body.data.email).toBe('test@pzn.com');
        expect(result.body.data.phone).toBe('0808997888876');
    });

    it('should can reject if request not valid', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set('Authorization', 'test')
            .send({
                first_name: '',
                last_name: 'test',
                email: 'test',
                phone: '08089978888760808997888876080899788887608089978888760808997888876',
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});