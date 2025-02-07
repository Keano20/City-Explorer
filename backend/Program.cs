using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

// Simple route that returns a message
app.MapGet("/", () => "Hello, world!");

app.Run();