using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IndividuallOppgave.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace IndividuallOppgave.Controllers
{
    
    
    [Route("api/[controller]")]
    public class FAQController : Controller
    {
        private readonly FAQContext _context;
        public FAQController(FAQContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public  JsonResult Get()
        {
            var faqdb = new FAQdb(_context);
            List<FAQ> alleFAQs = faqdb.hentAlleFAQs();
            return  Json(alleFAQs);
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var faqdb = new FAQdb(_context);
           List<FAQ> svar = faqdb.hentsvar(id);
            return Json(svar);
        }


        [HttpPut("{id}")]
        public JsonResult Put(int id, [FromBody]FAQs innfaq)
        {
            if (ModelState.IsValid)
            {
                var faqdb = new FAQdb(_context);
                bool OK = faqdb.editThumbs(id, innfaq);
                if (OK)
                {
                    return Json("OK");
                }
            }
            return Json("Kunne ikke endre faq i DB");
        }






        [HttpPost]
        public JsonResult Post([FromBody]KundeQuetion innFAQ)
        {
            if (ModelState.IsValid)
            {
                var faqdb = new FAQdb(_context);
                bool OK = faqdb.lagreFAQ(innFAQ);
                if (OK)
                {
                    return Json("OK");
                }
            }
            return Json("Kunne ikke sette inn kunden i DB");
        }

    }
}
