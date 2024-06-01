function calcular(){
        
   const n1 = parseFloat(document.getElementById('n1').value);
   const n2 = parseFloat(document.getElementById('n2').value);
   const n3 = parseFloat(document.getElementById('n3').value);
   const n4 = parseFloat(document.getElementById('n4').value);
   const n5 = parseFloat(document.getElementById('n5').value);
   const n6 = parseFloat(document.getElementById('n6').value);
    
   const soma = n1+n2+n3+n4+n5+n6;

   document.getElementById('resultado').textContent = "Júlia, a soma é igual a "+ soma;

}
