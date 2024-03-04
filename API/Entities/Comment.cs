using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Entities
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string UserId { get; set; }
        public virtual User User { get;set;}=new User();
        public int DestinationId { get; set; }
        [JsonIgnore]
        public Destination Destination { get; set; }=new Destination();
        public string Body { get; set; }
        public int? ParentId { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Type { get; set; }
    }
}