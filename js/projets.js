var projets = {
	'RadioPi': {
		'title': 'RadioPi',
		'description': 'Radio internet collaborative développée dans le cadre du cours de MOR',
		'techs': [
			'NodeJS',
			'Express',
			'Socket.io',
			'Youtube-API',
			'mplayer',
			'ReactJS',
			'Foundation'
		],
		'pics': [
			'img/radiopi.png',
			'img/radiopi2.png',
		],
		'link': 'https://github.com/radiopi/radiopi'
	},
	'MultiFlow': {
		'title': 'MultiMultiFlow',
		'description': 'Version multiplayer du jeu MultiFlow, consiste à résoudre un set de multiplications le plus vite possible',
		'techs': [
			'NodeJS',
			'Socket.io',
			'Express',
			'ReactJS',
			'MaterializeCSS'
		],
		'link': 'https://github.com/mac-ak47/MultiMultiFlow',
		'pics': [
			'img/multiflow.png',
			'img/multiflow2.png',
		]
	},
	'Reverse Keygen': {
		'title': 'Reverse Keygen',
		'description': 'Script permettant de facilement génerer des clés SSH',
		'techs': [
			'bash'
		],
		'link': 'https://raw.githubusercontent.com/mac-ak47/ReverseKeygen/master/reverseKeygen.sh',
		'pics': [
			'img/reverseKeygen.png',
			'img/reverseKeygen2.png'
		]
	},
	'sitePandas': {
		'title': 'Un site sur les pandas',
		'description': 'Site réalisé dans le cadre du cours d\'internet et multimedia. Le site est entiérement écrit en HTML5/CSS3 y compris la galerie d\'image !',
		'techs': [
			'HTML5',
			'CSS3'
		],
		'pics': [
			'img/sitePandas.png',
			'img/sitePandas2.png'
		],
		'link': 'https://kingkunta.github.io'
	}
};

function createProjectCard(data){
	var title = `<h2>${data.title}</h2>`;
	var description = data.description;

	var techs = (function(){
		var techs = data.techs;
		var markup = '';
		for(var i in data.techs){
			markup += `<span class="hashtag">${data.techs[i]}</span>`;
		}
		return markup;
	})();

	// var pics = (function(){
	// 	var pics = data.pics;
	// 	var markup = '';
	// 	for(var i in pics){
	// 		markup += `<img class="projectPic" src="${pics[i]}" /><br/>`;
	// 	}
	// 	return markup;
	// })();

	var url = `<a href="${data.link}">Lien</a>`;
	var markup = `
				<div class="flex-item">
					<div class="projet">
						<a href="${data.pics[0]}" data-lightbox="${data.title.replace(' ', '')}" data-title="${data.description}">
							<img src="${data.pics[0]}" />
						${title}
						<a href="${data.pics[1]}" data-lightbox="${data.title.replace(' ', '')}" data-title="${data.description}">
							Image 2
						</a>
					</div>
				</div>`;
	//$("#mount-point-projets").append(title + pics + description + url + "<br />" + techs);
	$("#mount-point-projets").append(markup);
}

for(var i in projets){
	createProjectCard(projets[i]);
}