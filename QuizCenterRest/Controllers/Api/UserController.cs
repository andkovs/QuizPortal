using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace QuizCenterRest.Controllers.Api
{
    public class UserController : ApiController
    {
        //Get api/users
        public JsonResult Get() 
        {
            return new JsonResult
            {
                Data = new { name = "Bob"}
            };
        }
    }
}