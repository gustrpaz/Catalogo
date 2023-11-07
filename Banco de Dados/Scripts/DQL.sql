USE CATALOGO;
GO

SELECT * FROM Filme
SELECT * FROM Genero

SELECT COUNT(*) as count_filmes
FROM Filme
WHERE idGenero = 3

SELECT COUNT(IdFilme)'Quantidade Filmes' FROM Filme

SELECT NomeFilme,NomeGenero FROM Filme 
INNER JOIN Genero
ON Filme.IdGenero = Genero.IdGenero
GO

UPDATE Genero
SET NomeGenero = 'Ação'
WHERE IdGenero = 3

