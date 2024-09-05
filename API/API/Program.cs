//Minimal APIs em C#
//Testar a API
// - Rest Client - Extensão VS Code
// - Postman
// - Insomnia
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//Endpoints - Funcionalidades
//Requisição - URL e método/verbo HTTP
app.MapGet("/", () => "Hello World em C#!");

app.MapGet("/segundafuncionalidade", () => "Segunda funcionalidade");


app.Run();

//Exercícios para próxima aula
// - Criar um endpoint para receber informação pela URL
// - Criar um endpoint para receber informação pelo corpo