#! usr/bin/env node
import inquirer from "inquirer";
// put balance and pincode:
let myBalance = 20000; // Dollar
let myPincode = 2241;
// identification of pincode:
let pincode = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "please enter your pincode"
    }
]);
if (pincode.pincode === myPincode) {
    console.log("correct pin code!!!");
    // make opertions:
    let operations = await inquirer.prompt([
        {
            name: "operations",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    // if user select withdraw:
    if (operations.operations === "withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "please enter your amount"
            }
        ]);
        if (amount.amount <= myBalance) {
            let balance = myBalance - amount.amount;
            console.log(`your remaining balance is ${balance}`);
        }
        else {
            console.log(`you have insufficient balance`);
        }
    }
    // if user select fast cash:
    else if (operations.operations === "fast cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "select an option",
                choices: ["1000", "3000", "5000", "25000", "10000", "20000"]
            }
        ]);
        if (fastcash.amount <= myBalance) {
            let balance2 = myBalance - fastcash.amount;
            console.log(`your remaining balance is ${balance2}`);
        }
        else {
            console.log(`you have insufficient balance`);
        }
    }
    else {
        console.log(myBalance);
    }
}
else {
    console.log("invalid pin code!!!");
}
