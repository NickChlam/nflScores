
exports.getWeek = async function(req,res) {
   
    // set dates for football weeks ( tuesday is first day for picks END Days is 2 days later at 4pm  )
    
    const week9 = new Date(2019, 9, 29);
    const week9End = new Date(2019, 9, 31);
    week9End.setUTCHours(22)

    const week10 = new Date(2019, 10, 5);
    const week10End = new Date(2019, 10, 7);
    week10End.setUTCHours(22)

    const week11 = new Date(2019, 10, 12);
    const week11End = new Date(2019, 10, 14);
    week11End.setUTCHours(22)

    const week12 = new Date(2019, 10, 19);
    const week12End = new Date(2019, 10, 21);
    week12End.setUTCHours(22)

    const week13 = new Date(2019, 10, 26);
    const week13End = new Date(2019, 10, 28);
    week13End.setUTCHours(22)

    const week14 = new Date(2019, 11, 3);
    const week14End = new Date(2019, 11, 5);
    week14End.setUTCHours(22)

    const week15 = new Date(2019, 11, 10);
    const week15End = new Date(2019, 11, 12);
    week15End.setUTCHours(22)

    const week16 = new Date(2019, 11, 17);
    const week16End = new Date(2019, 11, 19);
    week16End.setUTCHours(22)

    const week17 = new Date(2019, 11, 24);
    const week17End = new Date(2019, 11, 26);
    week17End.setUTCHours(22)

    // todays date 
    const date = new Date()
   
    
    console.log(date)
    console.log(week10)
    console.log(week10End)
    
    // TODO: better logic to determine if date is between tuesday and thursday at 4pm
        if (date >= week9  && date <= week9End ) {
            return res.status(200).send({'week': '9'}) 
        }
        if (date >= week10 && date <= week10End ){
            return res.status(200).send({'week':'10'}) 
        }
        if (date >= week11 && date <= week11End ){
            return res.status(200).send({'week':'11'}) 
        }
        if (date >= week12 && date <= week12End ){
            return res.status(200).send({'week':'12'}) 
        }
        if (date >= week13 && date <= week13End ){
            return res.status(200).send({'week':'13'}) 
        }
        if (date >= week14 && date <= week14End ){
            return res.status(200).send({'week':'14'}) 
        }
        if (date >= week15 && date <= week15End ){
            return res.status(200).send({'week':'15'}) 
        }
        if (date >= week16 && date <= week16End ){
            return res.status(200).send({'week':'16'}) 
        }
        if (date >= week17 && date <= week17End ){
            return res.status(200).send({'week':'17'}) 
        }

        
        return res.status(200).send({'week': "not allowed"})
        

       
            
}
