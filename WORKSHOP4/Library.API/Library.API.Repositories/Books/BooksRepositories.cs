using Library.API.Data.Abstraction;
using Library.API.Domain.Books;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.API.Repositories.Books
{
    public class BooksRepositories : IBookRepository
    {
        private readonly IMongoCollection<Book> books;
        public BooksRepositories(IDatabase database)
        {
            this.books = database.GetCollection<IMongoCollection<Book>, Book>("Books");
        }
        public Task<bool> DeleteAsync(string id, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<List<Book>> GetAllAsync(CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<Book> GetByIdAsync(string id, CancellationToken cancellationToken)
        {
            var result = await this.books.Find(x => x.Id == id).FirstOrDefaultAsync(cancellationToken);
            return result;
        }

        public async Task<string> InsertAsync(Book item, CancellationToken cancellationToken)
        {
            if(string.IsNullOrWhiteSpace(item.Id))
            {
                item.Id=ObjectId.GenerateNewId().ToString();
            }
            await this.books.InsertOneAsync(item, cancellationToken);
            return item.Id;
        }

        public Task<bool> UpdateAsync(Book item, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();

        }


    }
}
