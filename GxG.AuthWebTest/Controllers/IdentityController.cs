using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace GxG.AuthWebTest.Controllers
{
    [Route("identity")]
    public class IdentityController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult(from c in User.Claims select new { c.Type, c.Value });
        }
    }
}
