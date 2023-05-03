const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");



const books = require('./books');

// console.log(__dirname);

// console.log(books);

const invokeAction = async ({ action, id, title, author }) => {
    switch (action) {
        case "read":
            const allBooks = await books.getAll();
            return console.log(allBooks);
        case "getById":
            const oneBook = await books.getById(id);
            return console.log(oneBook);
        case "add":
            const newBook = await books.add({ title, author });
            return console.log(newBook);
        case "updateById":
            const updateBook = await books.updateById(id, { title, author });
            return console.log(updateBook);
        case "deleteById":
            const deleteBook = await books.deleteById(id);
            return console.log(deleteBook);
        default:
            return console.log("Unknown action");

    }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//     const action = process.argv[actionIndex + 1];
//     // console.log(action);
//     invokeAction({action})
// }



// invokeAction({ action: 'read' });
// invokeAction({ action: "getById", id:"u9kgwNWGi3uUUwh0b8V49"});
// invokeAction({ action: "add", title:"Worm", author:"John C.McCrae"});
// invokeAction({ action: "updateById", id:"3dT4WXZoklJ3aoIwTp4Ts", author:"John C.McCrae", title:"Ward", author:"John C.McCrae"});
// invokeAction({ action: "deleteById", id:"3dT4WXZoklJ3aoIwTp4Ts"});

