using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommentsController:ControllerBase
    {
        private readonly DestinationContext _context;
        public CommentsController(DestinationContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<List<Comment>>> GetComments()
        {
            return await _context.Comments.Include(c=>c.User).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Comment>> GetComments(int id)
        {
            return await _context.Comments.FindAsync(id);
        }
        [HttpPost]
        public async Task<ActionResult<Comment>> CreateComment(CommentsDto request){
            var user=_context.Users.FirstOrDefault(u=>u.UserName=="bob");
            
            var newComment=new Comment{
                Body=request.Body,
                CreatedAt=request.CreatedAt,
                Type=request.Type,
                ParentId=request.ParentId,
                DestinationId=request.DestinationId,
            };
            var dest=_context.Destinations.FirstOrDefault(d=>d.Id==newComment.DestinationId);
            newComment.UserId=user.Id;
            newComment.User=user;
            newComment.DestinationId=request.DestinationId;
            newComment.Destination=dest;

            _context.Comments.Add(newComment);
            await _context.SaveChangesAsync();
            return Ok(await _context.Comments.Include(c=>c.User).ToListAsync());

        }
    }
}