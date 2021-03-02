using MasterApi.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MasterApi.Data
{
    public class MasterAppContext : DbContext
    {
        public MasterAppContext(DbContextOptions options) : base(options)
        {

        }


        public DbSet<User> Users { get; set; }
    }
}
