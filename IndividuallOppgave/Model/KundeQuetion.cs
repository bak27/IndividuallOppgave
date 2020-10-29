using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IndividuallOppgave.Model
{
    public class kundeQuetion
    {
        public int id { get; set; }
        [Required]
        [RegularExpression("^[a-zæøåA-ZÆØÅ. \\-]{2,50}$")]
        public string navn { get; set; }
        [Required]
        [RegularExpression(@"^[A-ZZÆØÅa-zzæøå0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,16}$")]
        public string epost { get; set; }
        
        [Required]
        [RegularExpression("^[a-zæøåA-ZÆØÅ. \\-]{2,100}$")]
        public string quetions { get; set; }
       


    }
}
