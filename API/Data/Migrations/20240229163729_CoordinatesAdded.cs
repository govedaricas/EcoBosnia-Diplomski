using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class CoordinatesAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7224c9ff-da47-4e08-a993-821dafcf113c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9a7ff830-557a-4166-b039-55b52e1c22b5");

            migrationBuilder.RenameColumn(
                name: "Coordinates",
                table: "Destinations",
                newName: "CoordinateB");

            migrationBuilder.AddColumn<float>(
                name: "CoordinateA",
                table: "Destinations",
                type: "REAL",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3b59706a-c522-405d-a1ed-085e63bb2f16", null, "Member", "MEMBER" },
                    { "e9c18728-eb89-432c-b706-7e50d62673bc", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3b59706a-c522-405d-a1ed-085e63bb2f16");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e9c18728-eb89-432c-b706-7e50d62673bc");

            migrationBuilder.DropColumn(
                name: "CoordinateA",
                table: "Destinations");

            migrationBuilder.RenameColumn(
                name: "CoordinateB",
                table: "Destinations",
                newName: "Coordinates");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7224c9ff-da47-4e08-a993-821dafcf113c", null, "Member", "MEMBER" },
                    { "9a7ff830-557a-4166-b039-55b52e1c22b5", null, "Admin", "ADMIN" }
                });
        }
    }
}
