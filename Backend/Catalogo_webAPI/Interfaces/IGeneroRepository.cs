using Catalogo_webAPI.Domains;

namespace Catalogo_webAPI.Interfaces
{
    interface IGeneroRepository
    {
        /// <summary>
        /// Lista todos os Generos
        /// </summary>
        /// <returns></returns>
        List<Genero> ListarTodos();
        /// <summary>
        /// Busca um determinado Gênero pelo seu Id
        /// </summary>
        /// <param name="IdGenero"></param>
        /// <returns></returns>
        Genero BuscarPorId(int IdGenero);
        /// <summary>
        /// Cadastra um novo Gênero 
        /// </summary>
        /// <param name="novoGenero"></param>
        void Cadastrar(Genero novoGenero);
        /// <summary>
        /// Atualiza os dados de um determinado Gênero cujo id é existente
        /// </summary>
        /// <param name="IdGenero"></param>
        /// <param name="generoAtualizado"></param>
        void Atualizar(int IdGenero, Genero generoAtualizado);
        /// <summary>
        /// Deleta um Gênero cujo Id é existente
        /// </summary>
        /// <param name="IdGenero"></param>
        void Deletar(int IdGenero);
    }
}
