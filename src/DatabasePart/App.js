const express=require('express');
const App=express();
const mongoose=require('mongoose');
const rc = require('./RandomCollection')

mongoose.connect('mongodb+srv://Sidharth:sidharth20@cluster0.pew60.mongodb.net/Employees?retryWrites=true&w=majority/Employess',
{

    useNewUrlParser:true,
    useUnifiedTopology:true
/*}
).then(()=>{
    console.warn('Db is connected');*/
});

rc.find ({},function(err,employees){
    if(err) console.warn(err);
    /*return ({

        <TableView data={employees}/>
    });*/
    console.warn(employees);
    //console.log(employees);
})

//mongodb+srv://sid:<password>@cluster0.l6xqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority