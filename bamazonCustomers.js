var mysql=require("mysql");
var inquirer = require("inquirer");

//create database connections
var connection=mysql.createConnection({
    host: "localhost",

    //port; if not 3306
    port: 3306,
  
    // username
    user: "root",
  
    //password
    password: "KiraIdo12@!",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    //function to show the products
    productsList();
    //askPuduct();
});

function productsList(){
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
    });
    askPuduct();
}

function askPuduct(){
    inquirer
  .prompt([
    //create a basic text prompt.
    {
      type: "input",
      message: "Tell me the ID of product that you're interested",
      name: "productID"
    },
    {
      type: "input",
      message: "How much do you need?",
      name: "quantity"
    }
  ])
  .then(function(inquirerResponse) {
    var ID=inquirerResponse.productID;
    var quantity=inquirerResponse.quantity;
    //console.log(ID);
    //console.log(quantity);
    
    connection.query("SELECT * FROM products WHERE id="+ID, function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        var unitPrice=res[0].price;
        console.log("You are trying to purchase "+quantity+res[0].product_name);
        var totalPrice=unitPrice*quantity;
        if(quantity>res[0].quantity){
            console.log("insufficient quntity");
            updateQuntity(res[0].product_name,quantity);
            connection.end();
        }else{
            console.log("Your total price is "+totalPrice);
            connection.end();
        }
      });
  });
}

function updateQuntity(name,quantity){

    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {quantity: quantity},
        {product_name: name}
        
      ],
      function(err, res) {
        if (err) throw err;
        console.log(name+ " products updated!\n"); 
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
    
}




