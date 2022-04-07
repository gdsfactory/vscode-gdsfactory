import * as vscode from 'vscode';
const shell = require('shelljs');


export function activate(context: vscode.ExtensionContext) {
	console.log('"gdsfactory" extension is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	let yaml_run = vscode.commands.registerCommand('gdsfactory.yaml_run', async () => {
        let command = "gf yaml build /home/jmatres/ubc/ubcpdk/circuits/mask.ic.yaml";
        shell.exec(command, { async: true }, async function (code:number, stdout:string, stderr:string) {
            console.log("Exec gdsfactory");
			 if (code === 0) {
				vscode.window.showInformationMessage('Error!');

            }
            else {
				vscode.window.showInformationMessage('works');

            }
        });
    });

	context.subscriptions.push(yaml_run);

	let disposable = vscode.commands.registerCommand('gdsfactory.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from gdsfactory!!!!!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
