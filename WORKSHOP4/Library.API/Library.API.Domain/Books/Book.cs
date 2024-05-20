using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.API.Domain.Books
{
    public class Book
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string AuthorId { get; set; }
        public string PublisherId { get; set; }
        public List<string >Generes { get; set; }
        public DateTime DateOfPublication { get; set; }
    }
}
