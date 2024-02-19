using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class CommentsDto
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public User User { get;set;}=new User();
        public string Body { get; set; }
        public int? ParentId { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Type { get; set; }
    }
}