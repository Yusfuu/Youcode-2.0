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

                  ===================================
    FULL NAME : 
    EMAIL     :
    CIN       :
                  ===================================
                     ♥♥    ONLINE TEST         ♥♥


                  ===================================
                     ♥♥    SERIOUS GAME        ♥♥

                  ===================================
                     ♥♥    MOTIVATION TEST     ♥♥
                     
                  ===================================
                     ♥♥    ADMINSTRATION TEST  ♥♥

                  ===================================
                     ♥♥    TECHNICAL TEST      ♥♥
      


    
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
