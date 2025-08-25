import addressServoce from "../service/address-servoce.js";

const create = async (req, res, next) => {
    try {
        const user = req.user;
        const request = req.body;
        const contactId = req.params.contactId;

        const result = await addressServoce.create(user, contactId, request);

        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
};

export default {
    create
}