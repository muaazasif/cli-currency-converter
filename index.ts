#! usr/bin/env node
import inquirer from "inquirer";

// Currency conversion rates
let currency: any = {
  USD: 1, // Base Currency
  PKR: 280,
  INR: 83,
  EUR: 0.93,
};
console.log("\n🚀 Welcome to Currency Converter! 🤑 \n");


async function main() {

  // Prompting user for input
  let user = await inquirer.prompt([
    {
      name: "from",
      message: "🔄 Enter From Currency : ",
      type: "list",
      choices: ["USD", "PKR", "INR", "EUR"],
    },
    {
      name: "to",
      message: "🔄 Enter To Currency : ",
      type: "list",
      choices: ["USD", "PKR", "INR", "EUR"],
    },
    {
      name: "amount",
      message: "💰 Enter Your Amount : ",
      type: "number",
    },
  ]);

  // Calculate conversion
  let fromAmount = currency[user.from];
  let toAmount = currency[user.to];
  let amt = user.amount;
  let baseAmount = amt / currency[user.from];
  let convert = baseAmount * toAmount;

  // Stop greeting animation and display result

  console.log("🎉 Conversion Result:", user.to, convert.toFixed(2));
  

}

main();
