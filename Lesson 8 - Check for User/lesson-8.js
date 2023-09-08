// Check that user with such name exists in array of objects

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
    },
];

// const isNameExists = (name, users) => {
//     let exists = false;
//     for (let i = 0; i < users.length; i++) {
//         if ((users[i].name).toLowerCase() === ((name)).toLowerCase()) {
//             exists = true;
//         }
//     }
//     return exists;
// };  

const isNameExists = (name, users) => users.some((user) => user.name.toLowerCase() === name.toLowerCase());
