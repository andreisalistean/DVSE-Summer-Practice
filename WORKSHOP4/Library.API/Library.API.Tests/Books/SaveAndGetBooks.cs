using Library.API.Data.Abstraction;
using Library.API.Data.MongoDB;
using Library.API.Domain.Books;
using MongoDB.Driver.Core.Configuration;
using Raven.Database.Plugins.Builtins.Monitoring.Snmp.Objects.Database.Statistics;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Library.API.Tests.Books
{
    public class SaveAndGetBooks:IDisposable
    {
        private IDatabaseConfiguration configuration;
        private IDatabase databse;
        private IBookRepository bookRepository;

        public SaveAndGetBooks()
        {
            configuration = new DatabaseConfiguration();
            {
                ConnectionString="",
                DatabaseName="Library"
            };
            database = new DatabaseConfiguration(configuration);
            bookRepository = new BooksRepository(database);
        }

        public void Dispose()
        {
            
        }
        [Theory]
        [InlineData("","book title 1","2020-05-01","horror")]
        [InlineData("", "book title 1", "2020-05-01", "horror","comedy")]
        public async Task SchouldSaveAndGetBooks(string id, string title, DateTime yearOfPublishment, params string[] generes)
        {
            var book = new Book
            {
                Title = title,
                YearOfPublishment = yearOfPublishment,
                Generes = generes.ToList(),
                Id = id

            };
            string newId=await this.bookRepository.InsertAsync(book, CancellationToken.None);
            var foundBook=await this.bookRepository.GetByIdAsync(newId, CancellationToken.None);

            Assert.Equal(book.Title, foundBook.Title);
        }
    }
}
