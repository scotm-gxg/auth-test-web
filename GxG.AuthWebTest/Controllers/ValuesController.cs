using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GxG.AuthWebTest.Controllers
{
    [Route("api/values")]
    public class ValuesController : Controller
    {
        public IEnumerable<string> Get()
        {
            return new [] {"Hello", "World"};
        }
    }
}
