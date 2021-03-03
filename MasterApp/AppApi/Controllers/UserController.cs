using AppApi.Data;
using AppApi.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        readonly AppApiContext _context;
        public UserController(AppApiContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _context.Users.AsEnumerable();
        }

        [HttpGet("{id}")]
        public User Get(Guid id)
        {
            return _context.Users.Find(id);
        }

        [HttpPost]
        public Guid Post([FromBody] User model)
        {
            _context.Users.Add(model);
            _context.SaveChanges();
            return model.Id;
        }

        [HttpPut]
        public Guid Put([FromBody] User model)
        {
            _context.Users.Update(model);
            _context.SaveChanges();
            return model.Id;
        }

        [HttpDelete("{id}")]
        public Guid Delete(Guid id)
        {
            _context.Users.Remove(Get(id));
            _context.SaveChanges();
            return id;
        }
    }
}
