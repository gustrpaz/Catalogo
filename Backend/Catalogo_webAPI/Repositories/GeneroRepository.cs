using Catalogo_webAPI.Contexts;
using Catalogo_webAPI.Domains;
using Catalogo_webAPI.Interfaces;

namespace Catalogo_webAPI.Repositories
{
    /// <summary>
    /// Classe responsável pelo Repository de Gênero
    /// </summary>
    public class GeneroRepository : IGeneroRepository
    {
        CatalogoContext ctx = new CatalogoContext();
        /// <summary>
        /// Método responsável por Atualizar um Gênero
        /// </summary>
        /// <param name="IdGenero"></param>
        /// <param name="generoAtualizado"></param>
        public void Atualizar(int IdGenero, Genero generoAtualizado)
        {
            // Busca um Gênero através do seu Id
            Genero generoBuscado = BuscarPorId(IdGenero);

            // Verifica a existência do novo NomeGenero que foi informado 
            if (generoAtualizado.NomeGenero != null)
            {
                // Caso exista, suas propriedades são atualizadas
                generoBuscado.NomeGenero = generoAtualizado.NomeGenero;
            }
            // Atualiza o Gênero que foi buscado na Lista
            ctx.Generos.Update(generoBuscado);
            // Salva as informações que serão gravadas no Banco de Dados
            ctx.SaveChanges();
        }

        /// <summary>
        /// Método responsável por Buscar um gênero através de um Id
        /// </summary>
        /// <param name="IdGenero"></param>
        /// <returns>Retorna o Gênero com o Id informado</returns>
        public Genero BuscarPorId(int IdGenero)
        {
            // Salva o Primeiro Gênero encontrado para o ID informado
            return ctx.Generos.FirstOrDefault(f => f.IdGenero == IdGenero)!;
        }

        /// <summary>
        /// Método responsável pelo cadastro de um novo gênero
        /// </summary>
        /// <param name="novoGenero"></param>
        public void Cadastrar(Genero novoGenero)
        {
            // Adiciona um novo Gênero
            ctx.Generos.Add(novoGenero);
            // Salva as informações que serão gravadas no Banco de Dados
            ctx.SaveChanges();
        }

        /// <summary>
        /// Método designado para Deletar um Gênero pelo seu Id
        /// </summary>
        /// <param name="IdGenero"></param>
        public void Deletar(int IdGenero)
        {
            Genero generoBuscado = BuscarPorId(IdGenero);
            // Remove o gênero que foi buscado
            ctx.Generos.Remove(generoBuscado);
            // Salva as informações que serão gravadas no Banco de Dados
            ctx.SaveChanges();
        }

        /// <summary>
        /// Método que lista todos os gêneros
        /// </summary>
        /// <returns>A lista com todos os Gêneros</returns>
        public List<Genero> ListarTodos()
        {
            // Retorna a lista com todas as informações dos Gêneros
            return ctx.Generos.ToList();
        }
    }
}
