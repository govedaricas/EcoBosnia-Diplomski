using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DestinationController:ControllerBase
    {
        private readonly DestinationContext _context;
        public DestinationController(DestinationContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<List<Destination>>> GetDestinations()
        {
            return await _context.Destinations.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Destination>> GetDestination(int id)
        {
            return await _context.Destinations.FindAsync(id);
        }

        [HttpPost]
        public async Task<ActionResult<List<Destination>>> AddDestination(Destination destination)
        {
            _context.Destinations.Add(destination);
            await _context.SaveChangesAsync();

            return await _context.Destinations.ToListAsync();
        }
    }
}