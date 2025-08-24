import supertest from "supertest";
import {createTestContact, createTestUser, getTestContact, removeAllTestContacts, removeTestUser} from "./test-util.js";
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

describe('GET /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });

    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });

    it('should can get contact', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .get('/api/contacts/' + testContact.id)
            .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe(testContact.first_name);
        expect(result.body.data.last_name).toBe(testContact.last_name);
        expect(result.body.data.email).toBe(testContact.email);
        expect(result.body.data.phone).toBe(testContact.phone);
    });

    it('should return 404 if contact id is not found', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .get('/api/contacts/' + (testContact.id + 1))
            .set('Authorization', 'test');

        expect(result.status).toBe(404);
    });
});

describe('PUT /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });

    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });

    it('should can update existing contact', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .put(`/api/contacts/${testContact.id}`)
            .set('Authorization', 'test')
            .send({
                first_name: "Derek",
                last_name: "Westbrook",
                email: "derekw@pzn.com",
                phone: "0808030434506"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe('Derek');
        expect(result.body.data.last_name).toBe('Westbrook');
        expect(result.body.data.email).toBe('derekw@pzn.com');
        expect(result.body.data.phone).toBe('0808030434506');
    });

    it('should reject if request is invalid', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .put(`/api/contacts/${testContact.id}`)
            .set('Authorization', 'test')
            .send({
                first_name: "",
                last_name: "",
                email: "derek",
                phone: ""
            });

        expect(result.status).toBe(400);
    });

    it('should reject if request is not found', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .put(`/api/contacts/${testContact.id + 1}`)
            .set('Authorization', 'test')
            .send({
                first_name: "Derek",
                last_name: "Westbrook",
                email: "derekw@pzn.com",
                phone: "0808030434506"
            });

        expect(result.status).toBe(404);
    });
});