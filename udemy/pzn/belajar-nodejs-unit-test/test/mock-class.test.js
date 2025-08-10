import {UserRepository} from "../src/user-repository.js";
import {UserService} from "../src/user-service.js";

jest.mock("../src/user-repository.js");

const repository = new UserRepository()
const service = new UserService(repository);

test("test mock user save", () => {
    const user = {
        id: 1,
        name: "Yan"
    };

    service.save(user);

    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
});

test("test mock class findById", () => {
    const user = {
        id: 1,
        name: "Yan"
    };

    repository.findById.mockReturnValueOnce(user);

    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
});

test("test mock class findAll", () => {
    const user = [
        {
            id: 1,
            name: "Yan"
        },
        {
            id: 2,
            name: "Gary"
        }
    ];

    repository.findAll.mockReturnValueOnce(user);

    expect(service.findAll()).toEqual(user);
    expect(repository.findAll).toHaveBeenCalled();
});