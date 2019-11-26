var mysql=require("mysql");
var inquirer=requier("inquirer");

var connection=mysql.createConnection({

    host:"localhoost",

    PORT: 3306,

    user: "root",

    password:"KiraIdo12@!",

    database:"bamazon"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id "+connection.threadid+"\n");
    operation();
});

function operation(){
    inquirer.prompt([{
        type: list,

        message:"Welcome back menager",

        name: "order",

        choices: ["view products for sale","view low inventory","add to inventory","add new product"]
    }]).then(function(res){
        if(res.order=="view products for sale"){
            viewProduct();
        }else if(res.order=="view low inventory"){
            viewLow();
        }else if(res.order=="add to inventory"){
            addInventory();
        }else if(res.order=="add new product"){
            addProduct();
        }else{
            console.log("error!!");
        }
        connection.end();
    });
}