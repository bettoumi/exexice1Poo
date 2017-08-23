
// EXERCICE-1
  var user={prenom:"sahbia",
	      nom:"ouaja",
	      payresidence:"france",
	      age:"40",
	      moypay:["visa","mastercard"],
	      affichn: function(){alert(this.nom);} ,
	      affichp: function(){alert(this.prenom);},
	      affichage: function(){
                 var d = new Date();
                  var n = d.getFullYear();
                    var datenaiss=n-this.age;
	      	       alert(datenaiss);}
          

};
user.affichn();
user.affichp();
user.affichage();
var  userob={
	     listpay:["FRANCE","ALMAGNE","BELGIQUE"],
	    listpayment:["visa","mastercard"],
	    agemin:32,
	    verifagemin:function(){ if(user.age>=userob.agemin){ console.log("agerespecter");}   else{ console.log("agemineur"); }},
	    verifpay:function(){ if(userob.listpay.includes(user.payresidence)){ return  "pays autorisé";} else{ console.log("pay non autorisé");} },
	     
	     verifpayement:function(){ var test=true;
	                               for(i=0;i<user.moypay;i++)
	                               	{ if(userob.listpayment.indexOf(user.moypay[i])===-1)
	                               		{ test=false;}}
       			                if(test) { console.log("moyent de payment autorisé");} 
       			                 else{ console.log("moyen non autoisé");}										
	                           }

};
userob.verifagemin();
userob.verifpay();
userob.verifpayement();

