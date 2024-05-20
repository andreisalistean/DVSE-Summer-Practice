namespace Library.API.Domain.Books
{
    public interface IRepository<T>
    {
        Task<List<T>> GetAllAsync(CancellationToken cancellationToken);
        Task<T> GetByIdAsync(string id, CancellationToken cancellationToken);
        Task<bool> DeleteAsync(string id, CancellationToken cancellationToken);
        Task<string> InsertAsync(T item, CancellationToken cancellationToken);
        Task<bool> UpdateAsync(T item, CancellationToken cancellationToken);
    }
}