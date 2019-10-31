
exports.getWeek = async function(req,res) {

    // set dates for football weeks ( tuesday is first day for picks )
    
    const week9 = new Date(2019, 9, 29);
    const week10 = new Date(2019, 10, 5);
    const week11 = new Date(2019, 10, 12);
    const week12 = new Date(2019, 10, 19);
    const week13 = new Date(2019, 10, 26);
    const week14 = new Date(2019, 11, 3);
    const week15 = new Date(2019, 11, 10);
    const week16 = new Date(2019, 11, 17);
    const week17 = new Date(2019, 11, 24);

    // todays date 
    const date = new Date()
    //date.setDate(date.getDate() + 2) 
    
   

    // TODO: better logic to determine if date is between tuesday and thursday at 4pm
        if (date >= week9 && date <= week9.setDate(week9.getDate() + 2) + week9.setUTCHours(22)){
            return res.status(200).send({'week': '9'}) 
        }
        if (date >= week10 && date <= week10.setDate(week10.getDate() + 2) + week10.setUTCHours(22)){
            return res.status(200).send({'week':'10'}) 
        }
        if (date >= week11 && date <= week11.setDate(week11.getDate() + 2) + week11.setUTCHours(22)){
            return res.status(200).send({'week':'11'}) 
        }
        if (date >= week12 && date <= week12.setDate(week12.getDate() + 2) + week12.setUTCHours(22)){
            return res.status(200).send({'week':'12'}) 
        }
        if (date >= week13 && date <= week13.setDate(week13.getDate() + 2) + week13.setUTCHours(22)){
            return res.status(200).send({'week':'13'}) 
        }
        if (date >= week14 && date <= week14.setDate(week14.getDate() + 2) + week14.setUTCHours(22)){
            return res.status(200).send({'week':'14'}) 
        }
        if (date >= week15 && date <= week15.setDate(week15.getDate() + 2) + week15.setUTCHours(22)){
            return res.status(200).send({'week':'15'}) 
        }
        if (date >= week16 && date <= week16.setDate(week16.getDate() + 2) + week16.setUTCHours(22)){
            return res.status(200).send({'week':'16'}) 
        }
        if (date >= week17 && date <= week17.setDate(week17.getDate() + 2) + week17.setUTCHours(22)){
            return res.status(200).send({'week':'17'}) 
        }

        return res.status(200).send({'week': "not allowed"})
            
}