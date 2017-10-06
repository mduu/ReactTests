using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace my_server_app.Models
{
    public class Address
    {
        public Guid Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public static IEnumerable<Address> BuildDefaultAddresses()
        {
            yield return new Address
            {
                Id = new Guid("1B8D78AF-9242-406F-95F7-8229D4D166AE"),
                Firstname = "John",
                Lastname = "Doe",
            };

            yield return new Address
            {
                Id = new Guid("313FEE9F-1C06-432B-8833-B133942281D7"),
                Firstname = "Jane",
                Lastname = "Doe",
            };
        }
    }
}