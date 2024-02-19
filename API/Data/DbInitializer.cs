using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DbInitializer
    {
        public static async Task Initialize(DestinationContext context,UserManager<User> userManager){

            if(!userManager.Users.Any()){
                var user=new User{
                    UserName="bob",
                    Email="bob@test.com"
                };

                await userManager.CreateAsync(user,"Pa$$w0rd");
                await userManager.AddToRoleAsync(user,"Member");

                var admin=new User{
                    UserName="admin",
                    Email="admin@test.com"
                };
                await userManager.CreateAsync(admin,"Pa$$w0rd");
                await userManager.AddToRolesAsync(user,new[] {"Member","Admin"});

            }
            User user1 = context.Users.FirstOrDefault(u => u.UserName == "admin");

            /* User user1=new User{
                UserName="Srdjan",
                Id="123",
                Email="srdjan@mail.com",
                PhoneNumber="066123123"
            };*/
            //if(context.Comments.Any()) return;
            if(user1!=null)
            {var comments=new List<Comment>{
                new Comment{
                   Body="FInal komentar",
                   ParentId=1,
                   CreatedAt=DateTime.Now,
                   Type="Tip1",
                   User=user1,
                },
               /* new Destination{
                    Name="Vrelo Miljacke",
                    Description="Izvor rijeke Miljacke, u blizini opstine Pale...",
                    ImageUrl="https://www.palelive.com/wp-content/uploads/2022/06/vrelo-miljacke5-gis.jpg",
                    Type="Izvor"
                },*/
            };

            foreach (var comment in comments)
            {
                context.Comments.Add(comment);
            }
            context.SaveChanges();}
        }
        
    }
}