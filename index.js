const ojp = require("ojparty")
const app = ojp.ojparty.app();


app.get("/",(req,res)=>{
  res.opj("index.html")
  res.end()
});

app.listen() 
