import { Component} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FAQs, IFAQs } from "./FAQ";
import { KundeQuetion} from "./KundeQuetion";
import { AvgangFAQ, IAvgangFAQ } from "./AvgangFAQ";

@Component({
    selector: "min-app",
    templateUrl: "SPA.html"
})
export class SPA {
    visSkjema: boolean;
    skjemaStatus: string;
    visFAQsListe: boolean;
    visAvgangFAQsListe: boolean;
    alleFAQs: Array<FAQs>;
    visSvarListe: boolean;
    visMelding: boolean;
    svar: Array<FAQs>;
    svaret: Array<AvgangFAQ>;
    alleAfaqs: Array<AvgangFAQ>;
    skjema: FormGroup;
    laster: boolean;
    vote = 1;
    constructor(private _http: HttpClient, private fb: FormBuilder) {
        this.skjema = fb.group({
            id: [""],
            navn: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,50}")])],
            epost: [null, Validators.compose([Validators.required, Validators.pattern("[A-Za-zØÆÅøæå0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,16}")])],
            quetions: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ?,. ]{2,100}")])],
           });
    }

    ngOnInit() {
        this.laster = true;
        this.hentAlleFAQs();
        this.hentAvgangFAQs();
        this.visSkjema = false;
        this.visFAQsListe = false;
        this.visAvgangFAQsListe = false;
        this.visSvarListe = false;
        this.visMelding = false;
    }

    visFAQ() {
        this.visFAQsListe = !this.visFAQsListe;
        this.laster = this.laster;
        this.visAvgangFAQsListe = false;
        this.visSkjema = false;
    }

    visAvgangFAQ() {
        this.visAvgangFAQsListe = !this.visAvgangFAQsListe;
        this.laster = this.laster;
        this.visSkjema = false;
        this.visFAQsListe = false;

        }
   

    thumbup(id: number) {
        this.votingup(id);
        
    }

    thumbdown(id: number) {
        this.votingdown(id);
        
    }

    thumbUp(id: number) {
        this.votingAvgang(id);
        

    }


    thumbDown(id: number) {
        this.votingAvgdown(id);
        
    }


    votingup(id: number) {
        var question = new FAQs();
       
        question.thumbsUp = this.vote;
        
        const body: string = JSON.stringify(question);
        const headers = new HttpHeaders({ "Content-Type": "application/json" });

        this._http.put("api/FAQ/" + id , body, { headers: headers })
            .subscribe(
                () => {
                    
                    //this.visFAQsListe = true;
                    console.log("ferdig post-api/FAQ");
                },
                error => alert(error)
            );
    };

    votingdown(id: number) {
        var question = new FAQs();
        
        question.thumbsDown = this.vote;

        const body: string = JSON.stringify(question);
        const headers = new HttpHeaders({ "Content-Type": "application/json" });

        this._http.put("api/FAQ/" + id , body, { headers: headers })
            .subscribe(
                () => {
                    
                    //this.visFAQsListe = true;
                    console.log("ferdig post-api/FAQ");
                },
                error => alert(error)
            );

    };

    votingAvgang(id: number) {
        var question = new AvgangFAQ();

        question.thumbsUp = this.vote;

        const body: string = JSON.stringify(question);
        const headers = new HttpHeaders({ "Content-Type": "application/json" });

        this._http.put("api/AvgangFAQ/" + id, body, { headers: headers })
            .subscribe(
                () => {

                    //this.visFAQsListe = true;
                    console.log("ferdig post-api/AvgangFAQ");
                },
                error => alert(error)
            );
    };



    votingAvgdown(id: number) {
        var question = new AvgangFAQ();

        question.thumbsDown = this.vote;

        const body: string = JSON.stringify(question);
        const headers = new HttpHeaders({ "Content-Type": "application/json" });

        this._http.put("api/AvgangFAQ/" + id, body, { headers: headers })
            .subscribe(
                () => {

                    //this.visFAQsListe = true;
                    console.log("ferdig post-api/AvgangFAQ");
                },
                error => alert(error)
            );
    };


hentAlleFAQs() {
        this._http.get<IFAQs[]>("api/FAQ/")
            .subscribe(
                FAQuetions => {
                    this.alleFAQs = FAQuetions;
                    console.log(this.alleFAQs);
                   // this.laster = false;
                    console.log("ferdig post-api/FAQ");
                  
                },
                error => alert(error)
            );
    };



    hentAvgangFAQs() {
        this._http.get<IAvgangFAQ[]>("api/AvgangFAQ/")
            .subscribe(
                FAQuetions => {
                    this.alleAfaqs = FAQuetions;
                    console.log(this.alleAfaqs);
                    // this.laster = false;
                    console.log("ferdig post-api/AvgangFAQ");

                },
                error => alert(error)
            );
    };

    hentSvar(id:number) {
        this._http.get<IFAQs[]>("api/FAQ/"+ id)
            .subscribe(
                FAQuetions => {
                    this.svar = FAQuetions;
                    this.visSvarListe = true;
                   
                     
                    console.log("ferdig post-api/FAQ");

                },
                error => alert(error)
            );
    };

    hentAvgangsvar(id: number) {
        this._http.get<IAvgangFAQ[]>("api/AvgangFAQ/" + id)
            .subscribe(
                FAQuetions => {
                    this.svaret = FAQuetions;
                    this.visSvarListe = true;


                    console.log("ferdig post-api/AvgangFAQ");

                },
                error => alert(error)
            );
    };

    vedSubmit() {
        if (this.skjemaStatus == "Registrere") {
            this.lagreFAQ();
            this.visMelding = true;
        }
       
        else {
            alert("Feil i applikasjonen!");
        }
    }

    registrerFAQs() {
       
        this.skjema.setValue({
            id: "",
            navn: "",
            epost: "",
            quetions: ""
         
            
        });
        this.skjema.markAsPristine();  
        this.visFAQsListe = false;
        this.visAvgangFAQsListe = false;
        this.skjemaStatus = "Registrere";
        this.visSkjema = true;
    }

    tilbakeTilListe() {
       // this.visFAQsListe = true;
        this.visSkjema = false;
        this.visMelding=false;
    }

    lagreFAQ() {
        var lagretFAQ = new KundeQuetion();
        lagretFAQ.navn = this.skjema.value.navn;
        lagretFAQ.epost = this.skjema.value.epost;
        lagretFAQ.quetions = this.skjema.value.quetions;
        
        

        const body: string = JSON.stringify(lagretFAQ);
        const headers = new HttpHeaders({ "Content-Type": "application/json" });

        this._http.post("api/FAQ", body, { headers: headers })
            .subscribe(
                () => {
                    this.hentAlleFAQs();
                    this.visSkjema = false;
                    //this.visFAQsListe = true;
                    console.log("ferdig post-api/FAQ");
                },
                error => alert(error)
            );
    };


}
