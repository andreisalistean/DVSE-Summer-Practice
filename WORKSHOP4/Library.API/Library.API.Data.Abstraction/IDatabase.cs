using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.API.Data.Abstraction
{
    public interface IDatabase
    {
        public TColection GetCollection<TColection, TItem>(string name)
            where TColection:class;

    }
}
