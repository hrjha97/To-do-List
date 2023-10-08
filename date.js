exports.getdate = function(){const today = new Date();
    const currentDay = today.getDay();
    

    
    let options ={
        weekday : "long",
        day : "numeric",
        month :"long"

        
    };
    
    const day = today.toLocaleDateString("en-US",options);
    return day;

}