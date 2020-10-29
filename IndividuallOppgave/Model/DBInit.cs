using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IndividuallOppgave.Model
{
    public static class DBInit
    {
        public static void Initialize(FAQContext context)
        {
            context.Database.EnsureCreated();
            if (context.FAQs.Any())
            {
                return;
            }
            var faqs = new FAQs[] 
            {
            new FAQs { quetions = "Kan jeg kjøpe billett på tog?", answers = "Ja. Vi selger billett på tog, men vi anbefaler å kjøpe billetten på nett eller mobil på forhånd.",thumbsUp = 0, thumbsDown = 0 },
            new FAQs { quetions = "Kan jeg reise på en annen avgang enn den som står på billetten?", answers = "Nei. Billetten gir rett til reise på bestemt avgang. " ,thumbsUp = 0, thumbsDown = 0 },
            new FAQs { quetions="Reiser barn gratis?",answers="Nei. Men barn opp til og med 5 år betaler kun 10 % av en voksenbillett.",thumbsUp = 0, thumbsDown = 0 },
            new FAQs { quetions="Kan jeg sende en pakke med tog?",answers="Ja. Vy tilbyr å frakte pakker på direktelinjer dersom det er plass.",thumbsUp = 0, thumbsDown = 0 },
            new FAQs { quetions="Kan jeg en gratis billet hvis jeg reise flere ganger med tog?",answers="Nei. men Vy tilbyr flere tilbud billeter.",thumbsUp = 0, thumbsDown = 0 }

            

            };
        
        foreach(var item in faqs)
            {
                context.FAQs.Add(item);
            }

            var avgangfaqs = new AvgangFAQ[]
            {
            new AvgangFAQ { quetions="Hvordan finner jeg ut om toget mitt er i rute?",answers="Sjekk om toget ditt er i rute her på vy.no, søk på avgangen i appen eller abonner på pushvarsling om avvik i appen.",thumbsUp = 0, thumbsDown = 0},
            new AvgangFAQ { quetions="Hvordan finner jeg rutetidene?",answers="Du kan raskt og enkelt gjøre et rutesøk i reiseplanleggeren eller i appen. Du kan også finne rutetider i rutetabellene.",thumbsUp = 0, thumbsDown = 0},
            new AvgangFAQ { quetions="Reisen min påvirkes av arbeider – hvor finner jeg mer informasjon?",answers="Informasjon om planlagte arbeider finnes også i reiseplanleggeren og i appen når du søker opp en avgang.",thumbsUp = 0, thumbsDown = 0},
            new AvgangFAQ { quetions="Hvordan kommer jeg meg til flyplassen?",answers="Du kan ta toget hyppig, raskt og rimelig til Oslo Lufthavn (Gardermoen), Trondheim Lufthavn (Værnes) og Torp Lufthavn (Sandefjord).",thumbsUp = 0, thumbsDown = 0},
            new AvgangFAQ { quetions="Hvor finner jeg informasjon om stasjonene?",answers="Se åpningstider og adresser for våre betjente stasjoner. For øvrig informasjon om stasjoner, se stasjonsoversikten på banenor.no.",thumbsUp = 0, thumbsDown = 0},
            
             };
            foreach (var item in avgangfaqs)
            {
                context.AvgangFAQs.Add(item);
            }

           context.SaveChanges();
        }
    
    }
}
