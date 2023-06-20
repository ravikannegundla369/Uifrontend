
let environment ='prod'
let sendingamount = 100

if(environment=='dev'){

    sendingamount = sendingamount + (10*sendingamount/100)
}

else if (environment=='test'){

    sendingamount = sendingamount + (20*sendingamount/100)
}

else if (environment=='stage'){

    sendingamount = sendingamount + (30*sendingamount/100)
}

else if (environment=='prod'){
    sendingamount = sendingamount + (5*sendingamount/100)
}
else {
    console.log('Please enter the proper environment ')
}

console.log(sendingamount)