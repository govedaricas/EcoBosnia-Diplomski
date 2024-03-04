
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace API.Entities
{
    [Table("AspNetUsers")]
    public class User : IdentityUser
    {
        public static implicit operator User(string v)
        {
            throw new NotImplementedException();
        }
        [JsonIgnore]
        public  List<Comment>? Comments { get; set; }
    }
}