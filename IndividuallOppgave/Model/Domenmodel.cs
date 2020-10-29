using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IndividuallOppgave.Model
{
    public class FAQ
    {
    public int id { get; set; }
   
   [Required]
   [RegularExpression("^[a-zæøåA-ZÆØÅ. \\-]{2,100}$")]
   public string quetions { get; set; }
   [Required]
   [RegularExpression("^[a-zæøåA-ZÆØÅ. \\-]{2,100}$")]
   public string answers { get; set; }
   public int thumbsUp { get; set; }
   public int thumbsDown { get; set; }
    }
}
