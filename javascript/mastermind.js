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
        this.game_over = false;
        this.code_hacked=false;
        this.all_digits_guessed=false;

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

        this.end_game_title = document.getElementById("end_game1") ;
        this.end_game_report = document.getElementById("end_game2") ;

        this.game_is_over();
        this.code_on_change();
        this.selector_Button_disabled() ;
        this.code_verify();
        this.printGame = document.getElementById("game_zone");
        this.printGame_zone(0);
        this.printMy_code();
        this.print_Current_att = document.getElementById("active_att");
        this.print_actual_att();


    }
    code_verify()   {
        this.sendButton.onclick = () => {
            let act_att=this.actual_att;
            let m = [this.code_selector[0],this.code_selector[1],this.code_selector[2],this.code_selector[3],this.code_selector[4]];
            let code_compared=Array.from (m) ;
            let code_secret=Array.from(this.secret_code);
            const attempt = new Attempt(act_att, m, 0, 0);
            this.attempts.push(attempt);
            
            this.attemp_evalution (act_att, code_compared, code_secret);

            this.printGame_zone(act_att+1);
            this.printMy_code();


            if (this.actual_att<this.MAX_ATTEMPTS-1) {
                this.actual_att+=1; 
                this.print_actual_att();
            }
            else {
                this.game_over=true;              
            }
            this.game_is_over()
        };

    }

    printMy_code() {
        this.vypis_muj_kod.innerHTML="" ;
        this.vypis_muj_kod.innerHTML+=`${this.code_selector}` ;
    }

    printSecret_code() {
        const secret_code = this.secret_code;
        this.vypis_tajny_kod.innerHTML=` Tajný kód: ${secret_code} `;

    }

    printGame_zone(att_used)    {
        this.printSecret_code();
        this.printGame.innerHTML = "";
        for (let j = 0; j < att_used; j++)   {
            const att = this.attempts[j];
            this.printGame.innerHTML += `  Pokus: ${att.no+1}`;
            this.printGame.innerHTML += `  Kód: ${att.my_code}`;
            this.printGame.innerHTML += `  Černý: ${att.black}`;
            this.printGame.innerHTML += `  Bílý: ${att.white}  <br>`;
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
            if (this.code_selector[i]=="Empty" || this.game_over) {
                this.sendButton.disabled = true ;
            }
          } 

    }

    secret_code_generator() {
        var i;
        for (let i = 0; i < this.DIGITS_NO ; i++) {
            var x= Math.floor(Math.random()*8)+1;
            this.secret_code[i]=x;
            }
    }

    attemp_evalution (att_no, y_c, s_c) {
        let black_s = 0;
        let white_s = 0;
        let digits_rest=this.DIGITS_NO;
        //black stick
        let new_iteration = true;
        while(new_iteration) {
            new_iteration = false ;
        for (let g = 0; g < digits_rest; g++)    {
        
                if (s_c[g]==y_c[g]) {
                    black_s+=1;
                    s_c.splice(g, 1)
                    y_c.splice(g, 1)
                    digits_rest=y_c.length;
                    new_iteration=true;
                    break;

                }

            }
        }
        // white stick 
        new_iteration = true;
        while(new_iteration) {
                new_iteration = false;
            for (let g = 0; g < digits_rest; g++)    {
                for(let h = 0 ; h < digits_rest; h++)    {
            
                    if (s_c[g]==y_c[h]) {
                        white_s+=1;
                        s_c.splice(g, 1)
                        y_c.splice(h, 1)
    
                        digits_rest=s_c.length;
                        new_iteration=true;
                        break;
                    }

                }

                }
            } 
        let total_s=white_s+black_s;    
        let w=att_no;
        this.attempts[w].black=black_s;
        this.attempts[w].white=white_s;

        if (white_s==5) {
            this.code_hacked=true;
            this.game_over=true;
        }
        else if (total_s==5)    {
            this.all_digits_guessed=true;
        }

    }
    
    game_is_over() {
        if (this.game_over) {
            this.end_game_title.innerHTML = " Konec hry " ;

            this.end_game_report.innerHTML = "Protokol "
        }
        else {
            this.end_game_title.innerHTML = "" ;

            this.end_game_report.innerHTML = "Jsi ve hre. "
        }
    }

    }
    const game_zone=new Game_Zone();

