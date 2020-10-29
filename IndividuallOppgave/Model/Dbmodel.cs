using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace IndividuallOppgave.Model
{


    public class FAQs
    {
        
         [Key]
        public int id { get; set; }
        public string quetions { get; set; }
        public string answers { get; set; }
        public int thumbsUp { get; set; }
        public int thumbsDown { get; set; }

    }

    public class AvgangFAQ
    {

        [Key]
        public int id { get; set; }
        public string quetions { get; set; }
        public string answers { get; set; }
        public int thumbsUp { get; set; }
        public int thumbsDown { get; set; }

    }


    public class StrekningFAQ
    {

        [Key]
        public int id { get; set; }
        public string quetions { get; set; }
        public string answers { get; set; }

    }

    public class KundeQuetion
    {
      [Key]
     public int id { get; set; }
     public string navn { get; set; }
     public string epost { get; set; }
     public string  quetions { get; set; }

    }

    public class FAQContext : DbContext
    {
        public FAQContext(DbContextOptions<FAQContext> options)
        : base(options) {
            {

            }
        }

        public DbSet<FAQs> FAQs { get; set; }
        public DbSet<KundeQuetion> KundeQuetion { get; set; }
        public DbSet<AvgangFAQ>  AvgangFAQs{ get; set; }
        public DbSet<StrekningFAQ> StrekningFAQs { get; set;}
       
    }
    
    
    }
