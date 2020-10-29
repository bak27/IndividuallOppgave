"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
var FAQ_1 = require("./FAQ");
var FAQ_2 = require("./FAQ");
var AvgangFAQ_1 = require("./AvgangFAQ");
var AvgangFAQ_2 = require("./VotingAvgdown");
var http_2 = require("@angular/http");
var SPA = (function () {
    function SPA(_http, fb) {
        this._http = _http;
        this.fb = fb;
        this.skjema = fb.group({
            id: [""],
            navn: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,50}")])],
            epost: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,50}")])],
            quetions: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,100}")])],
            
        });
    }
    SPA.prototype.ngOnInit = function () {
        this.laster = true;
        this.hentAlleFAQs();
        this.hentAvgangFAQs();
        this.visSkjema = false;
        this.visFAQsListe = false;
        this.visAvgangFAQsListe = false;
    };
    SPA.prototype.hentAlleFAQs = function () {
        var _this = this;
        this._http.get("api/FAQ/")
             .map(function (returData) {
                var JsonData = returData.json();
                return JsonData;
            })
            .subscribe(function (JsonData) {
                _this.alleFAQs = [];
                if (JsonData) {
                    for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                        var faqObjekt = JsonData_1[_i];
                        _this.alleFAQs.push(faqObjekt);
                        _this.laster = false;
                    }
                }
                ;
            }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/FAQ"); });
    };
    ;

    SPA.prototype.hentAvgangFAQs = function () {
        var _this = this;
        this._http.get("api/AvgangFAQ/")
            .map(function (returData) {
                var JsonData = returData.json();
                return JsonData;
            })
            .subscribe(function (JsonData) {
                _this.alleAfaqs = [];
                if (JsonData) {
                    for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                        var faqObjekt = JsonData_1[_i];
                        _this.alleAfaqs.push(faqObjekt);
                        _this.laster = false;
                    }
                }
                ;
            }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/FAQ"); });
    };
    ;

    SPA.prototype.hentSvar = function (id) {
        var _this = this;
        this._http.get("api/FAQ/"+ id)
            .map(function (returData) {
                var JsonData = returData.json();
                return JsonData;
            })
            .subscribe(function (JsonData) {
                _this.alleAfaqs = [];
                if (JsonData) {
                    for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                        var faqObjekt = JsonData_1[_i];
                        _this.alleAfaqs.push(faqObjekt);
                        _this.laster = false;
                    }
                }
                ;
            }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/FAQ"); });
    };
    ;

 SPA.prototype.hentAvgangsvar = function (id) {
        var _this = this;
        this._http.get("api/AvgangFAQ/" + id)
            .map(function (returData) {
                var JsonData = returData.json();
                return JsonData;
            })
            .subscribe(function (JsonData) {
                _this.alleAfaqs = [];
                if (JsonData) {
                    for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                        var faqObjekt = JsonData_1[_i];
                        _this.alleAfaqs.push(faqObjekt);
                        _this.laster = false;
                    }
                }
                ;
            }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/AvgangFAQ"); });
    };
    ;

    SPA.prototype.votingdown = function (id) {
        var _this = this;
        var lagretFAQ = new FAQ_1.FAQs();
        lagretFAQ.thumbUp = this.vote;
        var body = JSON.stringify(lagretFAQ);
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        this._http.put("api/FAQ/" + id, body, { headers: headers })
            .map(function (returData) { return returData.toString(); })
            .subscribe(function (retur) {
                _this.visSkjema = false;
                _this.visFAQsListe = false;
            }, function (error) { return alert(error); }, function () { return console.log("ferdig post-api/FAQ"); });
    };
    ;

    SPA.prototype.votingup = function (id) {
        var _this = this;
        var lagretFAQ = new FAQ_1.FAQs();
        lagretFAQ.thumbUp = this.vote;


        var body = JSON.stringify(lagretFAQ);
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        this._http.put("api/FAQ/" + id, body, { headers: headers })
            .map(function (returData) { return returData.toString(); })
            .subscribe(function (retur) {
                _this.visSkjema = false;
                _this.visFAQsListe = false;
            }, function (error) { return alert(error); }, function () { return console.log("ferdig post-api/FAQ"); });
    };
    ;


    

    SPA.prototype.votingAvgang = function (id) {
        var _this = this;
        var lagretFAQ = new AvgangFAQ_1.AvgangFAQ();
        lagretFAQ.thumbUp = this.vote;


        var body = JSON.stringify(lagretFAQ);
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        this._http.put("api/AvgangFAQ/" + id, body, { headers: headers })
            .map(function (returData) { return returData.toString(); })
            .subscribe(function (retur) {
                _this.visSkjema = false;
                _this.visFAQsListe = false;
            }, function (error) { return alert(error); }, function () { return console.log("ferdig post-api/AvgangFAQ"); });
    };
    ;






    SPA.prototype.votingAvgdown = function (id) {
        var _this = this;
        var lagretFAQ = new AvgangFAQ_2.votingAvgdown();
        lagretFAQ.thumbUp = this.vote;


        var body = JSON.stringify(lagretFAQ);
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        this._http.put("api/AvgangFAQ/" + id, body, { headers: headers })
            .map(function (returData) { return returData.toString(); })
            .subscribe(function (retur) {
                _this.visSkjema = false;
                _this.visFAQsListe = false;
            }, function (error) { return alert(error); }, function () { return console.log("ferdig post-api/AvgangFAQ"); });
    };
    ;



    SPA.prototype.vedSubmit = function () {
        if (this.skjemaStatus == "Registrere") {
            this.lagreFAQ();
        }
        
        else {
            alert("Feil i applikasjonen!");
        }
    };
    SPA.prototype.registrerFAQ = function () {
        // må resette verdiene i skjema dersom skjema har blitt brukt til endringer
        this.skjema.setValue({
            id: "",
            navn: "",
            epost: "",
            quetions: ""
           
        });
        this.skjema.markAsPristine();
        this.visFAQsListe = false;
        this.skjemaStatus = "Registrere";
        this.visSkjema = true;
    };
    SPA.prototype.tilbakeTilListe = function () {
        this.visFAQsListe = true;
        this.visSkjema = false;
    };
    SPA.prototype.lagreFAQ = function () {
        var _this = this;
        var lagretFAQ = new FAQ_2.KundeQuetion();
        lagretFAQ.navn = this.skjema.value.navn;
        lagretFAQ.epost = this.skjema.value.epost;
        lagretFAQ.quetions = this.skjema.value.quetions;
        
       
        var body = JSON.stringify(lagretFAQ);
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        this._http.post("api/FAQ", body, { headers: headers })
            .map(function (returData) { return returData.toString(); })
            .subscribe(function (retur) {
                _this.hentAlleFAQs();
                _this.visSkjema = false;
                _this.visFAQsListe = true;
            }, function (error) { return alert(error); }, function () { return console.log("ferdig post-api/FAQ"); });
    };
    ;

    return SPA;
}());
SPA = __decorate([
    core_1.Component({
        selector: "min-app",
        templateUrl: "./app/SPA.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], SPA);
exports.SPA = SPA;
//# sourceMappingURL=SPA.js.map
