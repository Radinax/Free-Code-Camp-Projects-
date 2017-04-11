/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" 
if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

SOLUTION
*/

function checkCashRegister(price, cash, cid) {
  //Since the decimals are making the code a bit hard, we will multiply it by 100 given the lowest value is 0.04
  price=price*100;
  cash=cash*100;
  var result=[];
  var change=cash-price; //This is what we need to give the customer
  var temp=change;
  
  //We need to know how much we have in the CID
  function TotalCash(cid){
    var tcash=0;
    for(var i=0;i<cid.length;i++){
      tcash+=cid[i][1]*100; //We access all the values of the object
    }
    return tcash;
    
  }
  
  //We need to make sure we have enough money to return our client
  var checker=TotalCash(cid);
  
  if(temp>checker){
    return "Insufficient Funds";
  }else if(temp===checker){
    return "Closed";
    
  }
  
  //Now we will use SWITCH to create cases so we can access our money in the CID
  
  
  //Now that we have Switch which let us access the money, we need to check the change with the bills from higher to low, in this case using a for
  for(var j=cid.length-1;j>=0;j--){
    var name=cid[j][0]; 
    var coin=cid[j][1]*100; //This gives me the AMOUNT of coins
    var value=Switch(name); //This gives me the EXACT value of the coin
    var quantity=coin/value; //For example 10000/10000=1 $100 or 101/1=101 pennys or 101 of $0,01
    var count=0; 
    while(change>=value&&quantity>0){ //50>=10000 FALSE so it goes on and on until CASE QUARTER which is 50>=25 and 425/25>0
      change-=value; //50-25=25
      quantity--; //17-1=16
      count++; //1
    }
    if(count>0){ //I put on the screen the change I'm returning to the client
      result.push([name,count*(value/100)]);
      
    }
    
    
  }
  
  if(TotalCash(result)!=temp){
      return "Insufficient Funds"; //In case I don't have enough money to give the client.
    }
  
  return result;
  
  function Switch(money){
    switch(money){
      case "PENNY":
        return 1;
      case "NICKEL":
        return 5;
      case "DIME":
        return 10;
      case "QUARTER":
        return 25;
      case "ONE":
        return 100;
      case "FIVE":
        return 500;
      case "TEN":
        return 1000;
      case "TWENTY":
        return 2000;
      case "ONE HUNDRED":
        return 10000;
    }
  }
  
  
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
