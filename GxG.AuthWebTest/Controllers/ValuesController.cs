using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GxG.AuthWebTest.Models;
using Microsoft.AspNetCore.Mvc;

namespace GxG.AuthWebTest.Controllers
{
    [Route("api/values")]
    public class ValuesController : Controller
    {
        public IEnumerable<OrderModel> Get()
        {
            return new [] {new OrderModel {OrderId = 1, OrderDescription = "the first order"},new OrderModel {OrderId = 2, OrderDescription = "the second order"}, };
        }
    }
}
