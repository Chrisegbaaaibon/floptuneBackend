const client = require('../database'),
         User = require('./user.model').email
exports.create = (req, res)=>{
   // validate request
   if(!req.body){
      res.status(400).send({message : "Content can not be emptiy!"});
      return;
   }

   // new user
   const user = new client({
    email : req.body
   })
   
   // save user in the database
   user.save(user)
         .then(data =>{
            // res.send(data)
            res.json("Successfully added to the wait-list")
         })
         .catch(err=>{
            res.status(500).send({
               message : err.message || "Some error occurred while creating a create operation"
            });
         });
   }
   