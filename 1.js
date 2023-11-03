"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books;

  constructor(books) {
    if (new Set(books).size !== books.length) {
      throw new Error("Массив содержит дубликат");
    }
    this.#books = new Set(books);
  }

  get allBooks() {
    return Array.from(this.#books);
  }

  addBook(title) {
    if (this.#books.has(title)) {
      throw new Error(`Книга '${title}' уже есть в библиотеке`);
    }
    this.#books.add(title);
  }

  removeBook(title) {
    if (!this.#books.has(title)) {
      throw new Error(`Книга '${title}' не существует в библиотеке.`);
    }
    this.#books.delete(title);
  }

  hasBook(title) {
    return this.#books.has(title);
  }
}

try {
  const initialBooks = ["Книга1", "Книга2", "Книга3"];
  const library = new Library(initialBooks);

  console.log(library.allBooks);
  library.addBook("Книга4");
  console.log(library.allBooks);
  library.removeBook("Книга2");
  console.log(library.allBooks);
  console.log(library.hasBook("Book3"));
} catch (error) {
  console.error(`Ошибка: ${error.message}`);
}
