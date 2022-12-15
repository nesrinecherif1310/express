const express = require('express');
const app = express();

const d = new Date();
    const day= d.getDay();
    const hour= d.getHours();
    console.log(day,hour)


    const avaibility=(req,res,next)=> {
    
    if((day>=1 && day<=5) && (hour>=9 && hour<=17)){
        next()   
    }
    else{
       res.sendFile(__dirname + '/public/index.html')}
    
     
}

app.use(avaibility);
app.use(express.static(__dirname + '/public'));


app.listen(3000,(err) => (err ? console.log(err) : console.log('server is running')))