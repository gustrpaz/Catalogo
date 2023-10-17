using System;
using System.Collections.Generic;

namespace Catalogo_webAPI.Domains;

public partial class Genero
{
    public int IdGenero { get; set; }

    public string NomeGenero { get; set; } = null!;

    public virtual ICollection<Filme> Filmes { get; set; } = new List<Filme>();
}
