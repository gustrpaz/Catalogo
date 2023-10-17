using Catalogo_webAPI.Domains;
using Catalogo_webAPI.Interfaces;
using Catalogo_webAPI.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Catalogo_webAPI.Controllers
{
    /// <summary>
    /// Controller responsável pelos endpoints (URLs) referentes aos Gêneros
    /// </summary>
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class GenerosController : ControllerBase
    {
        /// <summary>
        /// Objeto _generoRepository que receberá todos os métodos definidos na interface IGeneroRepository
        /// </summary>
        private IGeneroRepository _generoRepository { get; set; }

        /// <summary>
        ///  Instância do objeto "_generoRepository" para que seja possível fazer uso das implementações 
        ///  realizadas no repositório "GeneroRepository".
        /// </summary>
        public GenerosController()
        {
            _generoRepository = new GeneroRepository();
        }

        /// <summary>
        /// Lista todos os gêneros
        /// </summary>
        /// <returns>Uma lista de gêneros com o status code 200 - Ok</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                List<Genero> listaGenero = _generoRepository.ListarTodos();
                return Ok(listaGenero);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Busca um Gênero através do seu Id
        /// </summary>
        /// <param name="IdGenero">Id do gênero que será buscado</param>
        /// <returns>Retorna um Gênero encontrado com o status code 200 - Ok</returns>
        [HttpGet("{IdGenero}")]
        public IActionResult BuscarPorId(int IdGenero)
        {
            Genero generoBuscado = _generoRepository.BuscarPorId(IdGenero);
            if (generoBuscado == null)
            {
                return NotFound
                    (new
                    {
                        mensagem = "Gênero não encontrado",
                        erro = true
                    });
            }
            try
            {
                // Retorna o gênero encontrado
                return Ok(generoBuscado);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Cadastra um Gênero
        /// </summary>
        /// <param name="novoGenero">Objeto novoGenero com as informações</param>
        /// <returns>Status code 201 - Created</returns>
        [HttpPost]
        public IActionResult Cadastrar(Genero novoGenero)
        {
            try
            {
                // Faz a chamada para o método Cadastrar enviando as informações de cadastro
                _generoRepository.Cadastrar(novoGenero);
                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Atualiza um Gênero existente
        /// </summary>
        /// <param name="IdGenero">Id do Gênero que será atualizado</param>
        /// <param name="generoAtualizado">Objeto generoAtualizado com as novas informações</param>
        /// <returns>Status code 204 - No Content</returns>
        [HttpPut("{IdGenero}")]
        public IActionResult Atualizar(int IdGenero, Genero generoAtualizado)
        {
            Genero generoBuscado = _generoRepository.BuscarPorId(IdGenero);
            if (generoBuscado == null)
            {
                return NotFound
                    (new
                    {
                        mensagem = "Gênero não encontrado",
                        erro = true
                    });
            }
            try
            {
                // Faz a chamada para o método Atualizar enviando as novas informações
                _generoRepository.Atualizar(IdGenero, generoAtualizado);
                // Retorna um Status Code 204
                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Deleta um Gênero existente
        /// </summary>
        /// <param name="IdGenero">Id do Gênero que será deletado</param>
        /// <returns>Status code 204 - No Content</returns>
        [HttpDelete("{IdGenero}")]
        public IActionResult Deletar(int IdGenero)
        {
            Genero generoBuscado = _generoRepository.BuscarPorId(IdGenero);
            if (generoBuscado != null)
            {
                try
                {
                    _generoRepository.Deletar(IdGenero);
                    return StatusCode(204);
                }
                catch (Exception erro)
                {
                    return BadRequest(erro);
                }
            }
            return NotFound("Gênero não encontrado");
        }
    }
}
