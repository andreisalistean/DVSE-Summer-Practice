using Library.API.Data.Abstraction;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.API.Data.MongoDB
{
    public class Database : IDatabase

        this.RegisterCustomMap();
    {
        private readonly IMongoDatabase db;
        private readonly MongoClient client;

        public Database(IDatabaseConfiguration configuration)
        {
            this.client=new MongoClient(configuration.ConnectionString);
            this.db=this.client.GetDatabase(configuration.DatabaseName);
        }

        public TColection GetCollection<TColection, TItem>(string name)
            where TColection:class
        {
            return this.db.GetCollection<TItem>(name) as TColection;
        }

        private void RegisterCustomMappings()
        {
            if(BsonClassMap.IsClassMapRegistered(typeof(Book))) 
            {
                BsonClassMap.RegisterClassMap<Book>(m =>
                {
                    m.AutoMap();
                    m.MapIdMember(mi => mi.Id).SetIdGenerator(new StringObjectIdGenerator())
                    .SetSerializer(new StringSerializer(BsonType.ObjectId));

                    m.MapMember(mi => mi.AuthorId)
                    .SetSerializer(new StringSerializer(MongoDB.Bson.BsonType.ObjectId));

                    m.SetIgnoreExtraElements(true);
                });
            }
        }
    }
}
