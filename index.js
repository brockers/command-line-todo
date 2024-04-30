import  prompts from 'prompts';
import { color, log, blue, green } from 'console-log-colors';

var todoList = [];

const main = async () => {
	const nextTodo = async() => {
		return await prompts({
			type: 'select',
			name: 'value',
			message: 'What do you want to do?',
			choices: [
				{ "title": 'S) Show todo list', value: 'S' },
				{ "title": 'A) Add to todo list', value: 'A' },
				{ "title": 'D) Mark someting Done in todo list', value: 'D' },
				{ "title": 'Q) Quit todo list', value: 'Q' },
			],
		});
	};

	const addTodo = async() => {
		return await prompts({
			type: 'text',
			name: 'value',
			message: 'What is your new todo item?',
		});
	};

	const printTodo = () => {
		var sel = 1;
		console.log("\n\n");
		console.log(color.blue("================== Your Current ToDo List ================"));
		todoList.forEach( (x) => {
			console.log("      " + sel + ")   " + color.green(x.value));
			sel++;
		});
		console.log(color.blue("=========================================================="));
		console.log("\n");
	};

	const delTodo = async() => {
		return await prompts({
		  type: 'number',
		  name: 'value',
		  message: 'Which todo is complete?',
		  initial: 1,
		  style: 'default',
		  min: 1,
		  max: todoList.length,
		});
	};

	var option = {};
	do{
		option = await nextTodo();
		switch (option.value){
			case 'S':
				printTodo();
				break;
			case 'D':
				printTodo();
				var del = await delTodo();
				todoList.splice((del.value - 1), 1);
				break;
			case 'A':
				todoList.push(await addTodo());
				break;
		}
		// console.log(option.value);
	} while (option.value != 'Q');
};

main().catch(console.error);
