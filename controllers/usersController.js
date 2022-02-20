import { v4 as uuidv4 } from 'uuid';

// tmp users data
let users = [
    {
        "firstName": "Taesung",
        "lastName": "Lee",
        "age": 34,
        "id": "ea748dd7-e0a3-4d14-8ce3-80fc5eca450b"
    }
];

export const getUsers = (req, res, next) => { // 모든 유저 출력
    // 클라이언트에 응답 값을 줄 것
    res.send(users);
}

export const createUser = (req, res, next) => { // 유저 생성
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId };
    users.push(userWithId);

    // 클라이언트에 응답 값을 줄 것
    res.send(`User with the username ${user.firstName} added to the Database!`);
}

export const getUser = (req, res, next) => { // 유저 출력
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id); // users 오브젝트에서 해당 id를 가진 유저를 찾는다.

    // 클라이언트에 응답 값을 줄 것
    res.send(foundUser);
}

export const deleteUser = (req, res, next) => { // 유저 삭제
    const { id } = req.params;
    users = users.filter((user) => user.id !== id); // filter 함수로 해당 id를 가진 오브젝트는 제거

    // 클라이언트에 응답 값을 줄 것
    res.send(`User with the id ${id} deleted from the Database!`);
}

export const updateUser = (req, res, next) => { // 유저 수정
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id); // users 오브젝트에서 해당 id를 가진 유저를 찾는다.

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    // 클라이언트에 응답 값을 줄 것
    res.send(`User with the id ${id} has been updated!`);
}