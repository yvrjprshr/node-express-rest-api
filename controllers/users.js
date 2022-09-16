import {v4 as uuidv4} from 'uuid';

let users = []

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user)=>user.id === id);
    res.send(foundUser)
}
export const addUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId};
    users.push(userWithId);
    res.send(users);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter(user=>user.id!==id)
    res.send(`User with the ${id} deleted`) 
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const targetUser = users.find(user=>user.id === id)
    const {firstName, lastName, age} = req.body

    if(firstName)targetUser.firstName = firstName
    if(lastName)targetUser.lastName = lastName
    if(age)targetUser.age = age

    res.send(`${targetUser.firstName} details updated`)
}