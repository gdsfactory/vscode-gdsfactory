import * as vscode from 'vscode';
const shell = require('shelljs');


export function activate(context: vscode.ExtensionContext) {
	console.log('"gdsfactory" extension is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	let yamlRun = vscode.commands.registerCommand('gdsfactory.yamlRun', async () => {
		if (!vscode.window.activeTextEditor) {
					return; // no editor
				}
		let document = vscode.window.activeTextEditor.document;
        let filepath = document.fileName;
        let command = "gf yaml watch " + filepath;
		console.log(command);
        shell.exec(command, { async: true }, async function (code:number, stdout:string, stderr:string) {
            console.log("Exec gdsfactory");
			 if (code === 0) {
				vscode.window.showInformationMessage('watch folder and show changes in klayout!');

            }
            else {
				vscode.window.showInformationMessage('works');

            }
        });
    });

	context.subscriptions.push(yamlRun);

	let disposable = vscode.commands.registerCommand('gdsfactory.yamlWatch', () => {
		vscode.window.showInformationMessage('Hello World from gdsfactory!!!!!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
