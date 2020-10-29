using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IndividuallOppgave.Model;
using Microsoft.EntityFrameworkCore;

namespace IndividuallOppgave
{
    public class FAQdb
    {
        private readonly FAQContext _context;
    
    public FAQdb(FAQContext context)
        {
            _context = context;
        
        }

   public List<FAQ> hentAlleFAQs()
        {

            List<FAQ> alleFAQs = _context.FAQs.Where(k=>k.id >0).Select(k => new FAQ()
            {
                id = k.id,
                quetions = k.quetions,
                thumbsUp=k.thumbsUp,
                thumbsDown=k.thumbsDown

            }).ToList();
            return alleFAQs;
        }

        public List<AvgangFAQ> hentAvgangFAQs()
        
         {

            List<AvgangFAQ> alleFAQs = _context.AvgangFAQs.Where(k => k.id > 0).Select(k => new AvgangFAQ()
            {
                id = k.id,
                quetions = k.quetions,
                answers=k.answers,
                thumbsUp = k.thumbsUp,
                thumbsDown = k.thumbsDown

            }).ToList();
            return alleFAQs;
        }
       

        public List<FAQ> hentsvar(int id)
       
        {

            
          List<FAQ> ensvar = _context.FAQs.Where(k => k.id == id).Select(k => new FAQ()
            {
                id = k.id,
                answers = k.answers,
                thumbsUp=k.thumbsUp,
                thumbsDown=k.thumbsDown

            }).ToList();

           
            
            return ensvar;
        }

     public List<AvgangFAQ> hentAvgangsvar(int id)
        
        {


            List<AvgangFAQ> ensvar = _context.AvgangFAQs.Where(k => k.id == id).Select(k => new AvgangFAQ()
            {
                id = k.id,
                answers = k.answers,
                thumbsUp = k.thumbsUp,
                thumbsDown = k.thumbsDown


            }).ToList();



            return ensvar;
        }


        public bool editThumbs(int id, FAQs innfaq)
        {
            
            FAQs funnetFAQ = _context.FAQs.FirstOrDefault(k => k.id == id);
            if (funnetFAQ == null)
            {
                return false;
            }
            
                funnetFAQ.thumbsUp = funnetFAQ.thumbsUp + innfaq.thumbsUp;
                funnetFAQ.thumbsDown = funnetFAQ.thumbsDown + innfaq.thumbsDown;

            try
            {
                
                _context.SaveChanges();
            }
            catch (Exception feil)
            {
                return false;
            }
            return true;
        }


   

        public bool editAvgVoting(int id, AvgangFAQ innfaq)
        {

            AvgangFAQ funnetFAQ = _context.AvgangFAQs.FirstOrDefault(k => k.id == id);
            if (funnetFAQ == null)
            {
                return false;
            }

            funnetFAQ.thumbsUp = funnetFAQ.thumbsUp + innfaq.thumbsUp;
            funnetFAQ.thumbsDown = funnetFAQ.thumbsDown + innfaq.thumbsDown;


            try
            {

                _context.SaveChanges();
            }
            catch (Exception feil)
            {
                return false;
            }
            return true;
        }

        
    public bool lagreFAQ(KundeQuetion innFAQ)
        {
            var nyFAQ = new KundeQuetion
            {
                
                navn=innFAQ.navn,
                epost=innFAQ.epost,
                quetions = innFAQ.quetions
                

            };


            try
            {

                _context.KundeQuetion.Add(nyFAQ);
                _context.SaveChanges();
            }
            catch (Exception feil)
            {
                return false;
            }
            return true;
        }

     }
}
