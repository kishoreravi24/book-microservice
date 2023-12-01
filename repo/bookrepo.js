class BookRepository {
  constructor(bookModel){
    this.bookModel = bookModel;
  }

  getAllBooks(){
    return this.bookModel.find();
  }
}

module.exports = {
  BookRepository,
}

