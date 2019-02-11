class Korisnik{

    constructor(ime,prezime,password,embg,tel,email){
        this.ime=ime;
        this.prezime=prezime;
        this.password=password;
        this.embg=embg;
        this.tel=tel;
        this.email=email;

    }

    emailValidation (){

        let email=this.email;
        if (email.indexOf("@") > -1 && email.indexOf(".com") > -1) {
            return true;
        } else {
            
            return false;
        } 


    }
    najdiVozrast(){
     let niza = this.embg.split("")
     
     let godinaKorisnik="1"+niza[4]+niza[5]+niza[6];
     let d = new Date(); 
     let godina=d.getFullYear();
     godina=Number(godina);
     let vozrast;
     godinaKorisnik=Number(godinaKorisnik);
     vozrast=godina-godinaKorisnik;
     return vozrast;
       
     

    }




}
class ListaKorisnici{

    constructor(niza){

       this.niza=niza;
    }

    najstarKorisnik(){
         let element;
         let max=this.niza[0].najdiVozrast();
         let i;
        
        for(i=0;i<this.niza.length; i++){
            element=this.niza[i].najdiVozrast();
            if(max>element){

                max=max;
            }else{
                max=element;
            }


        }
           return max;




    }




}

var Goran = new Korisnik("Goran","Mitkovski","qwerty","0308980420027","077984779","goran@sss.com");
var Slave = new Korisnik("Slave","Slavevski","sssddff","0205981420035","008754","slave@gmail.com");
var Boge = new Korisnik("Boge","Slavevski","sssddff","0205989420035","008754","boge@gmail.com");
var Trajko = new Korisnik("Trajko","Trajkovski","sssddff","0205976420035","008754","trajko@gmail.com");

var korisnici=[Goran,Slave,Boge,Trajko];



var list = new ListaKorisnici(korisnici);
var najstar=list.najstarKorisnik();
console.log(korisnici);

var i;
for(i=0;i<korisnici.length;i++){

    if(korisnici[i].najdiVozrast()==najstar){
        console.log("Najstar korisnik e: "+korisnici[i].ime+" so "+korisnici[i].najdiVozrast()+" godini!!!");
        break;
    }

}

//list.najstarKorisnik();




