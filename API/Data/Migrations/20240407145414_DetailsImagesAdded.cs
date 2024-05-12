using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class DetailsImagesAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3b59706a-c522-405d-a1ed-085e63bb2f16");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e9c18728-eb89-432c-b706-7e50d62673bc");

            migrationBuilder.AddColumn<string>(
                name: "DetailsUrl",
                table: "Destinations",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "acdc9c1c-78a8-44a6-8802-1107792e0b3e", null, "Admin", "ADMIN" },
                    { "f94721be-47f1-490d-b632-df18bc932177", null, "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "acdc9c1c-78a8-44a6-8802-1107792e0b3e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f94721be-47f1-490d-b632-df18bc932177");

            migrationBuilder.DropColumn(
                name: "DetailsUrl",
                table: "Destinations");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3b59706a-c522-405d-a1ed-085e63bb2f16", null, "Member", "MEMBER" },
                    { "e9c18728-eb89-432c-b706-7e50d62673bc", null, "Admin", "ADMIN" }
                });
        }
    }
}
