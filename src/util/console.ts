import chalk from "chalk";

export const logInformation = (...args: any[]) => {
    console.log(`[${new Date().toTimeString().split(" ")[0]}] [${chalk.blueBright('*')}]` ,...args);
}

export const logError = (...args: any[]) => {
    console.log(`[${new Date().toTimeString().split(" ")[0]}] [${chalk.redBright('!')}]` ,...args);
}

export const logSuccess = (...args: any[]) => {
    console.log(`[${new Date().toTimeString().split(" ")[0]}] [${chalk.greenBright('+')}]` ,...args);
}