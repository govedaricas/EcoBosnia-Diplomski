using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class UserDto
    {
        public string Email { get; set; }
        public string Token { get; set; }
        public string Username { get; set; }
        public  List<CommentsDto>? Comments { get; set; }

        public static implicit operator UserDto(User v)
        {
            throw new NotImplementedException();
        }
    }
}