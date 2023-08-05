import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('gdsfactory.watch', () => {
        let terminal = vscode.window.createTerminal("gdsfactory");
        terminal.show();
        terminal.sendText('gf watch $PWD');
    });

    context.subscriptions.push(disposable);
}
