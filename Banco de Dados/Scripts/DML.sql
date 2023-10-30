USE CATALOGO;
GO

INSERT INTO Genero(NomeGenero)
VALUES ('Comedia'),('Romance'),('Acao');
GO

INSERT INTO Filme(IdGenero,NomeFilme)
VALUES (1,'A volta dos que nao foram'),(2,'Romeu e Julieta'),(3,'Superman');
GO

SELECT * FROM Filme
SELECT * FROM Genero

SELECT COUNT(IdFilme)'Quantidade Filmes' FROM Filme

SELECT NomeFilme,NomeGenero FROM Filme 
INNER JOIN Genero
ON Filme.IdGenero = Genero.IdGenero
GO

SELECT * FROM Filme

