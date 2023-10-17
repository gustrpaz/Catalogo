using Catalogo_webAPI.Contexts;
using Catalogo_webAPI.Domains;
using Catalogo_webAPI.Interfaces;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Catalogo_webAPI.Repositories
{
    /// <summary>
    /// Classe Responsável pelo Repository de Filme
    /// </summary>
    public class FilmeRepository : IFilmeRepository
    {
        CatalogoContext ctx = new CatalogoContext();
        /// <summary>
        /// Método Atualizar as propriedades de um Filme
        /// </summary>
        /// <param name="IdFilme"></param>
        /// <param name="filmeAtualizado"></param>
        public void Atualizar(int IdFilme, Filme filmeAtualizado)
        {
            // Busca um Filme através de seu Id
            Filme filmeBuscado = BuscarPorId(IdFilme);

            // Verifica se o NomeFilme que foi informado existe
            if (filmeAtualizado.NomeFilme != null)
            {
                // Caso exista, suas propriedades são atualizadas
                filmeBuscado.NomeFilme = filmeAtualizado.NomeFilme;
                filmeBuscado.IdGenero = filmeAtualizado.IdGenero;
            }
            // Atualiza o Filme que foi buscado na Lista
            ctx.Filmes.Update(filmeBuscado);
            // Salva as informações que serão gravadas no Banco de Dados
            ctx.SaveChanges();
        }

        /// <summary>
        /// Método responsável por Buscar um Filme através de um Id
        /// </summary>
        /// <param name="IdFilme"></param>
        /// <returns>Lista o Filme informado pelo Id</returns>
        public Filme BuscarPorId(int IdFilme)
        {
            // Salva o Primeiro Filme encontrado para o ID informado
            return ctx.Filmes.FirstOrDefault(f => f.IdFilme == IdFilme)!;
        }

        /// <summary>
        /// Método feito para Cadastrar um filme novo
        /// </summary>
        /// <param name="novoFilme"></param>
        public void Cadastrar(Filme novoFilme)
        {
            // Adiciona um novo Filme
            ctx.Filmes.Add(novoFilme);
            // Salva as informações que serão gravadas no Banco de Dados
            ctx.SaveChanges();
        }

        /// <summary>
        /// Método para Deletar um filme existente
        /// </summary>
        /// <param name="IdFilme"></param>
        public void Deletar(int IdFilme)
        {
            // Busca o filme informado através do Id 
            Filme filmeBuscado = BuscarPorId(IdFilme);
            // Remove o filme buscado
            ctx.Filmes.Remove(filmeBuscado);
            // Salva as informações que serão gravadas no Banco de Dados
            ctx.SaveChanges();
        }

        /// <summary>
        /// Método que lista todos os Filmes
        /// </summary>
        /// <returns>Retorna a lista com todos os filmes</returns>
        public List<Filme> ListarTodos()
        {
            // Retorna a lista com todas as informações dos Filmes
            return ctx.Filmes.Select(f => new Filme
            {
                IdFilme = f.IdFilme,
                IdGenero = f.IdGenero,
                NomeFilme = f.NomeFilme,
                IdGeneroNavigation = new Genero
                {
                    NomeGenero = f.IdGeneroNavigation!.NomeGenero,
                },
            }).ToList();
        }
    }
}
