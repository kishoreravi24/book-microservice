//Imports
const bookRepository = require('../repo/bookrepo');
const bookService = new BookService(bookRepository);

//Api usage
exports.getAllBooks = async(req,res,next) => {
  try{
    const response = await bookService.getAllBooks(req);
    res.statusCode = response.statusCode;
    return res.json({message: response.message, data: response.data});
  }catch(error){
    next(error);
  }
};

