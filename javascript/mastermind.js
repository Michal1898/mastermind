class Attempt {

    constructor (no, my_code, black_s, white_s) {
        this.no = no;
        this.my_code=my_code;
        this.black=black_s;
        this.white=white_s;
    }
}

class Game_Zone {
    constructor(jazyk = "cs-CZ") {
        this.MAX_ATTEMPTS = 10;
        this.charset="windows-1250"
        this.actual_att = 0;
        this.secret_code=["0", "0", "0", "0", "0"];
        this.attempts = [];

        this.code_selector=["0", "0", "0", "0", "0"];

        document.getElementById("digit0").value="Empty";
        document.getElementById("digit1").value="Empty";
        document.getElementById("digit2").value="Empty";
        document.getElementById("digit3").value="Empty";
        document.getElementById("digit4").value="Empty";

        this.code_selector[0] = document.getElementById("digit0").value;
        this.code_selector[1] = document.getElementById("digit1").value;
        this.code_selector[2] = document.getElementById("digit2").value;
        this.code_selector[3] = document.getElementById("digit3").value;        
        this.code_selector[4] = document.getElementById("digit4").value;

        this.sendButton = document.getElementById("check_code");
        this.vypis_muj_kod = document.getElementById("your_c");
        this.vypis_muj_kod.innerHTML="Michal";
        this.code_verify();
        //
        this.printGame = document.getElementById("game_zone");
    }

    code_verify()   {
        this.sendButton.onclick = () => {
            this.code_selector[0] = document.getElementById("digit0").value;
            this.code_selector[1] = document.getElementById("digit1").value;
            this.code_selector[2] = document.getElementById("digit2").value;
            this.code_selector[3] = document.getElementById("digit3").value;        
            this.code_selector[4] = document.getElementById("digit4").value;
            const attempt = new Attempt(this.actual_att, this.code_selector, this.actual_att-1, this.actual_att+3);
            this.attempts.push(attempt);
            this.actual_att+=1;
            this.printGame_zone();
            this.printMy_code();
        };

    }

    printMy_code() {
        this.vypis_muj_kod.innerHTML=this.code_selector ;

    }

    printGame_zone()    {
        this.printGame.innerHTML = "";
        for (let j = 0; j < this.actual_att; j++)   {
            const att = this.attempts[j];
            this.printGame.innerHTML += `  Pokus: ${att.no}`;
            this.printGame.innerHTML += `  Kód: ${att.my_code}`;
            this.printGame.innerHTML += `  Černý: ${att.white}`;
            this.printGame.innerHTML += `  Bílý ${att.black}  <br>`;
    }
      }

  
    
    }

const game_zone=new Game_Zone();
game_zone.printMy_code();

