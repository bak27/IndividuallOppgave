using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IndividuallOppgave.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IndividuallOppgave.Controllers
{
    [Route("api/[controller]")]
    public class AvgangFAQController : Controller
    {
        private readonly FAQContext _context;
        public AvgangFAQController(FAQContext context)
        {
            _context = context;
        }


        [HttpGet]
        public JsonResult Get()
        {
            var faqdb = new FAQdb(_context);
            List<AvgangFAQ> alleFAQs = faqdb.hentAvgangFAQs();
            return Json(alleFAQs);
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var faqdb = new FAQdb(_context);
            List<AvgangFAQ> svar = faqdb.hentAvgangsvar(id);
            return Json(svar);
        }



        [HttpPut("{id}")]
        public JsonResult Put(int id, [FromBody]AvgangFAQ innfaq)
        {
            if (ModelState.IsValid)
            {
                var faqdb = new FAQdb(_context);
                bool OK = faqdb.editAvgVoting(id, innfaq);
                if (OK)
                {
                    return Json("OK");
                }
            }
            return Json("Kunne ikke endre faq i DB");
        }





        [HttpPost]
        public JsonResult Post([FromBody]AvgangFAQ innFAQ)
        {
            if (ModelState.IsValid)
            {
                var faqdb = new FAQdb(_context);
                /*bool OK = faqdb.lagreFAQ(innFAQ);
                if (OK)
                {
                    return Json("OK");
                }*/
            }
            return Json("Kunne ikke sette inn kunden i DB");
        }




    }
}