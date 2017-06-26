var multiplos = require('assert');

var array = [7,23,21,49,57];
var rpt;
var nro2=7;
function multiplo(nro1,nro2)
{
	if(array % nro2 == 0){
		rpt = array;
	}
}

var esmultiplo = array.foreach(multiplo,nro2);

describe("es un multiplo de 7",function(){
	it('verifica que si son multiplos',function(){
		multiplos.equal('7,21,49',rpt);
	});
});