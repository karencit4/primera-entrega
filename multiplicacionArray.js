var producto = require('assert');
var array= [4,4,5,12];
var multiplicacion=1;
function multiplicar(nro1,nro2){
	multiplicacion =  nro1*nro2;
	return multiplicacion;
}
var num=9;
var resultado = array.reduce(multiplicar,num)
describe('Prueba Unitaria a pregunta 1', function(){
	it('comprobar multplicar',function(){
		//assert.equal(-1,[1,2,3].indexOf(4));
		producto.equal('8640', multiplicacion);
	});
});
