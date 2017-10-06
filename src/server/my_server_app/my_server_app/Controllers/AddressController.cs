using System.Collections.Generic;
using System.Web.Http;
using my_server_app.Models;

namespace my_server_app.Controllers
{
    public class AddressController : ApiController
    {
        // GET api/values
        public IEnumerable<Address> Get()
        {
            return Address.BuildDefaultAddresses();
        }
    }
}
