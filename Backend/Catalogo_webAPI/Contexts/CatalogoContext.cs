using System;
using System.Collections.Generic;
using Catalogo_webAPI.Domains;
using Microsoft.EntityFrameworkCore;

namespace Catalogo_webAPI.Contexts;

public partial class CatalogoContext : DbContext
{
    public CatalogoContext()
    {
    }

    public CatalogoContext(DbContextOptions<CatalogoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Filme> Filmes { get; set; }

    public virtual DbSet<Genero> Generos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-Q4CU27L\\SQLEXPRESS; initial catalog=CATALOGO; user Id=sa; pwd=senai@132; Encrypt=False;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Filme>(entity =>
        {
            entity.HasKey(e => e.IdFilme).HasName("PK__Filme__6E8F2A76E574BCF7");

            entity.ToTable("Filme");

            entity.Property(e => e.NomeFilme)
                .HasMaxLength(70)
                .IsUnicode(false)
                .IsFixedLength();

            entity.HasOne(d => d.IdGeneroNavigation).WithMany(p => p.Filmes)
                .HasForeignKey(d => d.IdGenero)
                .HasConstraintName("FK__Filme__IdGenero__398D8EEE");
        });

        modelBuilder.Entity<Genero>(entity =>
        {
            entity.HasKey(e => e.IdGenero).HasName("PK__Genero__0F8349889FC62E75");

            entity.ToTable("Genero");

            entity.HasIndex(e => e.NomeGenero, "UQ__Genero__081698E5A8523A67").IsUnique();

            entity.Property(e => e.NomeGenero)
                .HasMaxLength(30)
                .IsUnicode(false)
                .IsFixedLength();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
