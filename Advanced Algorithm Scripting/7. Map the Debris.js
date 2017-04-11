/*
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

SOLUTION
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var altitude=[];
  var r=[];
  var T=[];
  var pi=Math.PI;
  var result=[];
  var temp;
  //Considering that r=altitude+earthradius we can obtain different values of orbital period T
  for(var i=0;i<arr.length;i++){
    altitude.push(arr[i].avgAlt);
    r.push(altitude[i]+earthRadius);
    T.push(Math.round(2*pi*Math.pow((Math.pow(r[i],3))/(GM),(1/2))));
    temp={
    name:arr[i].name,
    orbitalPeriod:T[i]
  };
    result[i]=temp;
  }
  
  
  return result;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

