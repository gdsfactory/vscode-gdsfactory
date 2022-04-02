import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('"gdsfactory" extension is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('gdsfactory.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from gdsfactory!!!!!!!!!!');
	});
	context.subscriptions.push(disposable);

	let hi = vscode.commands.registerCommand('gdsfactory.hi', () => {
		vscode.window.showInformationMessage('Hi from gdsfactory!');
	});

	context.subscriptions.push(hi);
}

// this method is called when your extension is deactivated
export function deactivate() {}
