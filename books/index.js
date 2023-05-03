// в даному файлі ми пишемо функції, які будуть працювати з книгаим
const fs = require('fs/promises');
const path = require("path");
const { nanoid } = require("nanoid");

const bookPath = path.join(__dirname, "books.json");
// console.log(bookPath);


const getAll = async () => {
    const data = await fs.readFile(bookPath);
    // console.log(data);
    return JSON.parse(data);
}

const getById = async id => {
    const bookId = String(id);
    const books = await getAll();
    const result = books.find(item => item.id === bookId);
    return result||null;
}

const add = async (data) => {
    const bookId = String(id);
    const books = await getAll(); 
    const newBook = {
        id:nanoid(),
        ...data,
    }
    books.push(newBook);
    await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
    return newBook;
}

const updateById = async (id, data) => {
    const bookId = String(id);
    const books = await getAll();
    const index = books.findIndex(item => item.id === bookId);
    if (index === -1) {
        return null;
    }
    books[index] = { id, ...data };
        await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
    return books[index];
}

const deleteById = async (id) => {
    const bookId = String(id);
    const books = await getAll();
    const index = books.findIndex(item => item.id === bookId);
    if (index === -1) {
        return null;
    }
    const [result] = books.splice(index, 1);
    await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
    return result;

}

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
}