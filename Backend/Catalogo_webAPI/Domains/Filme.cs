using System;
using System.Collections.Generic;

namespace Catalogo_webAPI.Domains;

public partial class Filme
{
    public int IdFilme { get; set; }

    public int? IdGenero { get; set; }

    public string? NomeFilme { get; set; }

    public virtual Genero? IdGeneroNavigation { get; set; }
}
