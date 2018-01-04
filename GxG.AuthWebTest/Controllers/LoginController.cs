using System.Threading.Tasks;
using GxG.AuthWebTest.Models;
using IdentityModel.Client;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GxG.AuthWebTest.Controllers
{
    [Produces("application/json")]
    [Route("api/login")]
    [AllowAnonymous]
    public class LoginController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> LogIn([FromBody] AuthenticateModel authModel)
        {
            var discoveryClient = new DiscoveryClient("http://localhost:5000");
            var doc = await discoveryClient.GetAsync();

            var tokenClient = new TokenClient(doc.TokenEndpoint, "ro.client", "my-shared-secret");
            var tokenResponse = await tokenClient.RequestResourceOwnerPasswordAsync(authModel.UserName, authModel.Password);

            if (tokenResponse.IsError)
            {
                return BadRequest();
            }

            return Ok(tokenResponse.Json);
        }
    }
}
