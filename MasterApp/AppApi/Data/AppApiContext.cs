using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppApi.Data
{
    public class AppApiContext : DbContext
    {
        public AppApiContext(DbContextOptions options) : base(options)
        {

        }


        public DbSet<User> Users { get; set; }
    }
}
