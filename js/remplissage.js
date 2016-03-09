'use strict';
var skills = {
	"programmation": {
		"title": "Programmation_",
		"items": {
			"C": 3,
			"C#": 3,
			"Java": 2,
			"SQL": 4
		}
	},
	"webDev": {
		"title": "Développement Web_",
		"items": {
			"HTML 5": 3,
			"CSS 3": 2,
			"PHP": 1,
			"Javascript": 5,
			"React/JS": 4,
			"Node JS": 4
		}
	},
	"administration": {
		"title": "Administration_",
		"items": {
			"Scripting Bash": 3.5,
			"Linux/unix": 4,
			"Windows Server": 3
		}
	}

};

function numberToMarkup(note){
	var markup = '';
	var s_full = '<img src="img/s_full.png" />';
	var s_half = '<img src="img/s_half.png" />';
	var s_empty = '<img src="img/s_empty.png" />';

	for(var i = 0; i < 5; ++i){
		if(note >= 1){
			markup += s_full;
			note -= 1;
		} else if (note >= 0.5){
			markup += s_half;
			note -= 0.5;
		} else if(note >= 0){
			markup += s_empty;
		}
	};

	return markup;
}

function createSkillsetTable(data){
	var title = data.title;
	var items = data.items;
	var htmlTitle = `<h3>${title}</h3>`;
	var table = '<table class="skillSetTable"><tbody>';
	for(var i in items){
		var currentLine = `<tr>
			<td>
				${i}
			</td>
			<td>
				${numberToMarkup(items[i])}
			</td>
			</tr>`;
			table += currentLine;
	}
	table += '</tbody></table>';

	console.log(table);
	$('#mount-point-competences').append(htmlTitle + table);
}

for(var i in skills){
	createSkillsetTable(skills[i])
}