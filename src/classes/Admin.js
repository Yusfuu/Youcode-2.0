import { endpoints } from "../endpoints";
import { Fetcher } from "./Fetcher";
export class Admin {
  constructor() {
    this.tests = this.getCandidates();
  }
  async getCandidates() {
    const fetcher = new Fetcher(endpoints.get.test, "GET");
    const resposne = await fetcher.fetche();
    return resposne;
  }
  generatTxt(data) {
    const txt = `

                  ▀▄▀▄▀▄ PERSONAL INFORMATIONS ▄▀▄▀▄▀

                
    FULL NAME : ${data.fullName}
    EMAIL     : ${data.email}
    CIN       : ${data.cin}
    CREATED_AT: ${data.createdAt.split("T")[0]}

                  
                          ♥♥ ONLINE TEST ♥♥
                          =================
                          
                          ♥♥ SERIOUS GAME ♥♥
                          ==================
                          
    ${data.seriousGame.answer}

             
                          ♥♥ MOTIVATION TEST ♥♥
                          =====================

    ${data.motivationGame.answer}
               
                          ♥♥ ADMINSTRATION TEST ♥♥
                          ========================

    ${data.seriousGame.answer}
              
                          ♥♥ TECHNICAL TEST ♥♥
                          ====================

    ${data.seriousGame.answer}
    
    `;

    let blob = new Blob([txt], {
      type: "text/plain;charset=utf-8",
    });
    let url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = data.fullName;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
