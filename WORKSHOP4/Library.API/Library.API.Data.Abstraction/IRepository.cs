using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.API.Data.Abstraction
{
    public interface IRepository<T>
    {
        Task<List<T>>GetAllAsync (CancellationToken cancellationToken);
        Task<T> GetByIdAsync(string id, CancellationToken cancellationToken);
        Task<bool> DeleteAsync(string id, CancellationToken cancellationToken);
        Task<string> InsertAsync(T item, CancellationToken cancellationToken);
        Task<bool> UpdateAsync(T item, CancellationToken cancellationToken);

    }
}
