function nota(N1,N2) 
{
	return (N1+N2)/2 ;
}

window.onload = () => {
	document.getElementById('btnCalcular').onclick = () => {

	var N1 = document.querySelector('#nota1').value;
	var N2 = document.querySelector('#nota2').value;
	var media;

		N1 = parseFloat(N1);
		N2 = parseFloat(N2);


		if(N1!=NaN &&  N2!=NaN){
			media = nota(N1,N2);
		}
		
		if(media>=6){
			media = ` Aprovado media = [${media}]`;
		}
		
		
		if(media<6){
			if(N1 > N2){
				N2 = 0;
				N2 += parseFloat(prompt("Redigite a segunda nota"));
				media = nota(N1,N2);
			}else if(N1 < N2 || N1==N2 ){
				N1 = 0;
				N1 += parseFloat(prompt("Redigite a primeira nota"));
				media = nota(N1,N2);
			}
		}if(media>=6){
			media = ` Aprovado media = [${media}]`;
		}else if(media<6){
			media = ` lamento mais você não alcançou a media = [${media}]`;
		}
		


		document.querySelector('#spnResultado').innerHTML = media;
	}
}