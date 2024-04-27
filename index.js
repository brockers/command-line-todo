const prompts = require('prompts');

const main = async () => {
    const nextTodo = async() => {
        return await prompts({
            type: 'text',
            name: 'value',
            message: 'What is your next todo item?',
        });
    };

    var message = await nextTodo();
    console.log(message);
};

main().catch(console.error);