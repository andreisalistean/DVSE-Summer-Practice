using FluentValidation;
using FluentValidation.AspNetCore;
using Library.API.Data.Abstraction;
using Library.API.Data.MongoDB;
using MediatR;
using Microsoft.Extensions.DependencyModel;
using System.Reflection;

internal class Program
{
    private static Assembly[] assemblies;
    private static void Main(string[] args)
    {
        assemblies = LoadApplicationDependencies();
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddFluentValidation(options =>
        {
            options.RegisterValidatorsFromAssemblies(assemblies);
        });


        builder.Services.AddMediatR(options=>
        {
            options.RegisterServicesFromAssemblies(assemblies);
        });

        builder.Services.Scan(scan => scan.FromAssemblies(assemblies)
        .AddClasses(Type => Type.AssignableTo(typeof(IRepository<>)))
        .AsImplementedInterfaces().WithSingletonLifetime());

        

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();


        builder.Services.AddSingleton<IDatabaseConfiguration>(
            builder.Configuration.GetSection("DatabaseConfiguration").Get<DatabaseConfiguration>());


        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }

    private static Assembly[] LoadApplicationDependencies()
    {
        var context = DependencyContext.Default;
        return context.RuntimeLibraries.SelectMany(library=>library.GetDefaultAssemblyNames(context))
            .Where(assembly=>assembly.FullName.Contains("Library.API")).Select(Assembly.Load).ToArray();
    }
}