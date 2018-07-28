var userName = "Колян";
var userAge = 18;
var userFollow = true;

function userAccess(){
	if ((userAge >= 18) && (userFollow === true)){
		alert('Добро пожаловать' + ' ' + userName);
		console.log('Пользователь' + ' ' + userName + ' ' + 'допущен на сайт');
	}else {
		alert('Иди домой' + ' ' + userName);
		console.log('Пользователь' + ' ' + userName + ' ' + 'не допущен на сайт');
	}
}

userAccess(userName, userAge, userFollow);