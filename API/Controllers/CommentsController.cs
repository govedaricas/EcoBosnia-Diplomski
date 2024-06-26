using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommentsController:ControllerBase
    {
        private readonly DestinationContext _context;
        private readonly UserManager<User> _userManager;
        public CommentsController(DestinationContext context, UserManager<User> userManager)
        {
            _userManager = userManager;
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
            var user=await _userManager.FindByNameAsync(User.Identity.Name); 
            
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

        [HttpDelete]
        public async Task<ActionResult<List<Comment>>> DeleteComment(int commentId)
        {
            try
            {
                var comment = await _context.Comments.FindAsync(commentId);
                if (comment == null)
                {
                    return NotFound(); // Comment not found
                
                }
                _context.Comments.Remove(comment);
                await _context.SaveChangesAsync(); // Deletion successful
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error deleting comment: {ex.Message}");
            }
            return await _context.Comments.Include(c=>c.User).ToListAsync();
        }
    }
}