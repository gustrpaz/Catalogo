CREATE DATABASE CATALOGO;
GO

USE CATALOGO;
GO

CREATE TABLE Genero(
IdGenero INT PRIMARY KEY IDENTITY(1,1),
NomeGenero CHAR(30) NOT NULL UNIQUE
);
GO

CREATE TABLE Filme(
IdFilme INT PRIMARY KEY IDENTITY(1,1),
IdGenero INT FOREIGN KEY REFERENCES Genero(IdGenero),
NomeFilme CHAR(70)
);

SELECT * FROM Genero;
SELECT * FROM Filme;

SELECT Genero.IdGenero, NomeGenero
FROM Genero
INNER JOIN Filme ON Filme.IdFilme = Filme.IdFilme;



