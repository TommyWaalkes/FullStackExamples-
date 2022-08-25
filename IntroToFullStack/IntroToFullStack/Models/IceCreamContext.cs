using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace IntroToFullStack.Models
{
    public partial class IceCreamContext : DbContext
    {
        public IceCreamContext()
        {
        }

        public IceCreamContext(DbContextOptions<IceCreamContext> options)
            : base(options)
        {
        }

        public virtual DbSet<IceCream> IceCreams { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=IceCream;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<IceCream>(entity =>
            {
                entity.ToTable("IceCream");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Flavor)
                    .HasMaxLength(12)
                    .HasColumnName("flavor");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .HasColumnName("name");

                entity.Property(e => e.Rating).HasColumnName("rating");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
