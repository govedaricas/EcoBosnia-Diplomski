using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DestinationContext:IdentityDbContext<User>
    {
        public DestinationContext(DbContextOptions options):base(options)
        {
        }

        public DbSet<Destination> Destinations { get; set; }
        public DbSet<Comment> Comments{get;set;}


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole{Name="Member",NormalizedName="MEMBER"},
                new IdentityRole{Name="Admin",NormalizedName="ADMIN"}
            );

            builder.Entity<Comment>()
            .HasOne(c => c.User)
            .WithMany(u => u.Comments)  
            .HasForeignKey(c => c.UserId);
            builder.Entity<Comment>()
            .HasOne(c => c.Destination)
            .WithMany(d => d.Comments)  
            .HasForeignKey(c => c.DestinationId);
        }
        
    }
}