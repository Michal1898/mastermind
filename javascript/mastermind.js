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
        // --- Bonus point for Score ----
        this.CODE_HACKED=1000;
        this.ALL_DIGITS_QUESSESED=250;
        this.UNUSED_ATTEMPT=100;
        this.BLACK_STICK=2;
        this.WHITE_STICK=1;
        //------------------------------

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
                this.actual_att=this.MAX_ATTEMPTS;         
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
        if (this.game_over) {
            this.vypis_tajny_kod.innerHTML=` Tajn?? k??d: ${secret_code} `;
        }
        else    {
            this.vypis_tajny_kod.innerHTML=` Tajn?? k??d: ? ? ? ? ? `;
        }
    }

    printGame_zone(att_used)    {
        this.printSecret_code();
        this.printGame.innerHTML = "";
        for (let j = 0; j < att_used; j++)   {
            const att = this.attempts[j];
            this.printGame.innerHTML += `  Pokus: ${att.no+1}`;
            this.printGame.innerHTML += `  K??d: ${att.my_code}`;
            this.printGame.innerHTML += `  ??ern??: ${att.black}`;
            this.printGame.innerHTML += `  B??l??: ${att.white}  <br>`;
    }
      }

    print_actual_att() {
        this.print_Current_att.innerHTML = ""
        const att = this.actual_att;
        this.print_Current_att.innerHTML += `  Aktu??ln?? Pokus ????slo : ${(att)+1} <br>`;

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

        if (black_s==5) {
            this.code_hacked=true;
            this.game_over=true;
        }
        else if (total_s==5)    {
            this.all_digits_guessed=true;
        }

    }
    

   
    game_is_over() {
        this.selector_Button_disabled() ;
        this.printSecret_code();
        
        if (this.game_over) {
            let game_score = 0;
            this.end_game_title.innerHTML = " Konec hry " ;
            this.end_game_report.innerHTML="Protokol o h??e: ";
            this.end_game_report.innerHTML="</br> ";
            this.end_game_report.innerHTML+=`</br> `;

            if(this.code_hacked) {
                game_score+= this.CODE_HACKED;
                this.end_game_report.innerHTML+=`Prolomil jsi k??d! Odm??na ${this.CODE_HACKED} bod??!`;
            }
            else {
                this.end_game_report.innerHTML+=`Bohu??el se ti nepoda??ilo prolomit k??d!`;
                this.end_game_report.innerHTML+=`</br> `;

                if(this.all_digits_guessed) {
                    game_score+= this.ALL_DIGITS_QUESSESED;
                    this.end_game_report.innerHTML+=`Na??el jsi v??echny ????sla. Bohu??el nesouhlas?? po??ad??. Odm??na ${this.ALL_DIGITS_QUESSESED} bod??!`;
                }
                else {
                    this.end_game_report.innerHTML+='Bohu??el se ti nepoda??ilo naj??t v??echna ????sla!';
                }
            }
            this.end_game_report.innerHTML+=`</br> `;
            
            let att=this.actual_att;
            this.end_game_report.innerHTML+=`Vyu??ito ${att} pokus?? z ${this.MAX_ATTEMPTS} mo??n??ch.`;
            this.end_game_report.innerHTML+=`</br> `;
            let att_rest = this.MAX_ATTEMPTS-att;
            this.end_game_report.innerHTML+=`Zbyl?? pokusy: ${att_rest} `;
            this.end_game_report.innerHTML+=`</br> `; 
            let slot_points=att_rest*this.UNUSED_ATTEMPT;
            game_score+= slot_points;
            this.end_game_report.innerHTML+=`Za u??et??en?? pokusy jsi dostal: ${att_rest} * ${this.UNUSED_ATTEMPT} = ${slot_points} bod??!`;    
            this.end_game_report.innerHTML+=`</br> `;          

            let b=0;
            let w=0;   
            for (let j=0; j<this.actual_att;j++){
                b+=this.attempts[j].black;
                w+=this.attempts[j].white;    
            }

            let black_stick_points=b*this.BLACK_STICK;
            let white_stick_points=w*this.WHITE_STICK;
            game_score+=black_stick_points;
            game_score+=white_stick_points;

            this.end_game_report.innerHTML+=`Za ${b} ??ern??ch kol????k?? jsi z??skal ${black_stick_points} bod??!`;    
            this.end_game_report.innerHTML+=`</br> `; 
            this.end_game_report.innerHTML+=`Za ${w} b??l??ch kol????k?? jsi z??skal ${white_stick_points} bod??!`;    
            this.end_game_report.innerHTML+=`</br> `;  
            this.end_game_report.innerHTML+=`------------------------------------------------------------</br> `;       
            this.end_game_report.innerHTML+=`Celkem jsi z??skal ${game_score} bod??.`; 
        }

        else {
            this.end_game_title.innerHTML = "" ;

            this.end_game_report.innerHTML = "Jsi ve h??e. "
        }
    }

    }
    const game_zone=new Game_Zone();

