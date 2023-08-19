import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("gdsfactory.watch", () => {
    if (!vscode.window.activeTextEditor) {
      vscode.window.showErrorMessage("No active editor found.");
      return;
    }

    let filePath = vscode.window.activeTextEditor.document.uri.fsPath;
    let dirPath = path.dirname(filePath);

    let terminal = vscode.window.createTerminal("gdsfactory");
    terminal.show();
    terminal.sendText(`gf watch --path ${dirPath}`);
  });

  context.subscriptions.push(disposable);
}
