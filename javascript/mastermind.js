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
        this.DIGITS_NO = 5;
        this.charset="utf-8"
        this.init_new_game();

        this.new_gameButton.onclick = () => {
            this.init_new_game();
        };
    }


        

    code_changed() {
        this.code_selector[0] = document.getElementById("digit0").value;
        this.code_selector[1] = document.getElementById("digit1").value;
        this.code_selector[2] = document.getElementById("digit2").value;
        this.code_selector[3] = document.getElementById("digit3").value;        
        this.code_selector[4] = document.getElementById("digit4").value;        

        this.printMy_code();
    }

    code_on_change() {
        document.getElementById("digit0").onchange = () => {
            this.code_selector[0] = document.getElementById("digit0").value;
            this.code_selector[1] = document.getElementById("digit1").value;
            this.code_selector[2] = document.getElementById("digit2").value;
            this.code_selector[3] = document.getElementById("digit3").value;        
            this.code_selector[4] = document.getElementById("digit4").value;   

            this.selector_Button_disabled() ;
            this.printMy_code();

        };

        document.getElementById("digit1").onchange = () => {
            this.code_selector[0] = document.getElementById("digit0").value;
            this.code_selector[1] = document.getElementById("digit1").value;
            this.code_selector[2] = document.getElementById("digit2").value;
            this.code_selector[3] = document.getElementById("digit3").value;        
            this.code_selector[4] = document.getElementById("digit4").value;        
    
            this.selector_Button_disabled() ;
            this.printMy_code();

        };       
        
        document.getElementById("digit2").onchange = () => {
            this.code_selector[0] = document.getElementById("digit0").value;
            this.code_selector[1] = document.getElementById("digit1").value;
            this.code_selector[2] = document.getElementById("digit2").value;
            this.code_selector[3] = document.getElementById("digit3").value;        
            this.code_selector[4] = document.getElementById("digit4").value;        
    
            this.selector_Button_disabled() ;
            this.printMy_code();

        };

        document.getElementById("digit3").onchange = () => {
            this.code_selector[0] = document.getElementById("digit0").value;
            this.code_selector[1] = document.getElementById("digit1").value;
            this.code_selector[2] = document.getElementById("digit2").value;
            this.code_selector[3] = document.getElementById("digit3").value;        
            this.code_selector[4] = document.getElementById("digit4").value;        
    
            this.selector_Button_disabled() ;
            this.printMy_code();

        };

        document.getElementById("digit4").onchange = () => {
            this.code_selector[0] = document.getElementById("digit0").value;
            this.code_selector[1] = document.getElementById("digit1").value;
            this.code_selector[2] = document.getElementById("digit2").value;
            this.code_selector[3] = document.getElementById("digit3").value;        
            this.code_selector[4] = document.getElementById("digit4").value;        
    
            this.selector_Button_disabled() ;
            this.printMy_code();

        };        
    }


    init_new_game() {
        this.actual_att = 0;
        this.secret_code=["0", "0", "0", "0", "0"];
        this.secret_code_generator();
        this.attempts = [];
        this.sendButton = document.getElementById("check_code");
        this.new_gameButton = document.getElementById("new_game");
        this.vypis_tajny_kod = document.getElementById("secret_c")
        this.vypis_muj_kod = document.getElementById("your_c");
        this.vypis_muj_kod.innerHTML="Michal";

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

        this.code_on_change();
        this.selector_Button_disabled() ;
        this.code_verify();
        this.printGame = document.getElementById("game_zone");
        this.printGame_zone();
        this.printMy_code();
        this.print_Current_att = document.getElementById("active_att");
        this.print_actual_att();


    }
    code_verify()   {
        this.sendButton.onclick = () => {
            let g=[this.code_selector[0],this.code_selector[1],this.code_selector[2],this.code_selector[3],this.code_selector[4]];
            const attempt = new Attempt(this.actual_att, g, 0, 0);
            this.attempts.push(attempt);
            this.actual_att+=1;
            this.printGame_zone();
            this.printMy_code();
            this.print_actual_att();
        };

    }

    printMy_code() {
        this.vypis_muj_kod.innerHTML=this.code_selector ;

    }

    printSecret_code() {
        const secret_code = this.secret_code;
        this.vypis_tajny_kod.innerHTML=` Tajný kód: ${secret_code} `;

    }


    printGame_zone()    {
        this.printSecret_code();
        this.printGame.innerHTML = "";
        for (let j = 0; j < this.actual_att; j++)   {
            const att = this.attempts[j];
            this.printGame.innerHTML += `  Pokus: ${att.no+1}`;
            this.printGame.innerHTML += `  Kód: ${att.my_code}`;
            this.printGame.innerHTML += `  Černý: ${att.white}`;
            this.printGame.innerHTML += `  Bílý: ${att.black}  <br>`;
    }
      }

    print_actual_att() {
        this.print_Current_att.innerHTML = ""
        const att = this.actual_att;
        this.print_Current_att.innerHTML += `  Pokus: ${(att)+1} <br>`;

    }

    selector_Button_disabled() {
        this.sendButton.disabled = false ;
        for (let i = 0; i < this.DIGITS_NO ; i++) {
            if (this.code_selector[i]=="Empty") {
                this.sendButton.disabled = true ;
            }
          } 

    }

    secret_code_generator() {

        var i;
        for (i = 0; i < this.DIGITS_NO ; i++) {
            var x= Math.floor(Math.random()*8)+1;
            this.secret_code[i]=x;
            }
    }
    
    }

const game_zone=new Game_Zone();

