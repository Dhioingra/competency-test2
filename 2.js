let array = ['u', 'D', 'm', 'w', 'b', 'a', 'y', 's', 'i', 's', 'w', 'a', 'e', 's', 'e', 'o', 'm', ' ', ' '];

function order (arr){
	let cetak = 'Dumbways is awesome';
	let kontainer = '';

	for(let i = 0; i < cetak.length; i++){
		for(let j = 0; j < arr.length; j++){
			if(arr[j] === cetak[i]){
				kontainer += arr[j];
				break;
			}
		}
	}
	array = kontainer;
}

order(array);

console.log(array) 

