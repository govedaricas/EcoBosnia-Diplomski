using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Destination
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string Type { get; set; }

        public float CoordinateA { get; set; }
        public float CoordinateB { get; set; }
               
        public  List<Comment>? Comments { get; set; }
    }
}