
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("AspNetUsers")]
    public class User : IdentityUser
    {
        public static implicit operator User(string v)
        {
            throw new NotImplementedException();
        }
        public  List<Comment>? Comments { get; set; }
    }
}