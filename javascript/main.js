function ordersumbit(){
    console.log('test1');
    var mobilenumber=document.getElementById('mobilenumber').value;
    console.log('mobilenumber');
    var movie=document.getElementById('movie').value;
    console.log('movie');
    var date=document.getElementById('date').value;
    console.log('date');
    var number=document.getElementById('number').value;
    console.log('number')
    var otp=document.getElementById('otp').value;
    console.log('otp')

    if (movie=="kanguva"){
        console.log("Booking Successful! Your tickets are confirmed");
        var one_kanguva=150;
        var total=parseInt(one_kanguva)*parseInt(number);
        console.log(total);
        document.getElementById('output').innerHTML='Hey!'  +movie+ ' is booked. pay amount:'+total;

    }
    else if(movie=="amaran"){
        console.log("Booking Successful! Your tickets are confirmed");
        var one_amaran=200;
        var total=parseInt(one_amaran)*parseInt(number);
        console.log(total);
        document.getElementById('output').innerHTML='Hey!'  +movie+ ' is booked. pay amount:'+total;


    }

    else if(movie=="luckybasker"){
        console.log("Booking Successful! Your tickets are confirmed");
        var one_luckybasker=250;
        var total=parseInt(one_luckybasker)*parseInt(number);
        console.log(total);
        document.getElementById('output').innerHTML='Hey!'  +movie+ ' is booked. pay amount:'+total;


    }

    else if(movie=="venom"){
        console.log("Booking Successful! Your tickets are confirmed");
        var one_venom=350;
        var total=parseInt(one_venom)*parseInt(number);
        console.log(total);
        document.getElementById('output').innerHTML='Hey!'  +movie+ ' is booked. pay amount:'+total;


    }
    else{
        console.log("Please fill in all required fields correctly");
    }



}

