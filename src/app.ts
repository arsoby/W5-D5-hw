import express, { Application, Request, Response, json } from "express";
const app: Application = express();
const port: number = 3000;

function fetchApi(user: string):any {
    let jData;
  fetch(`https://api.github.com/users/Tuwaiq-Academy-Training/repos`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        let jsonObj:any=[];
        data.map((e:any)=>{
            let j={name:String,url:String,created_at:String,updated_at:String}
            j.name=e.name
            j.created_at=e.created_at
            j.url=e.html_url
            j.updated_at=e.updated_at
            jsonObj.push(j)
        }
        
        )
        console.log(jsonObj);
        
        jData= jsonObj
        
        
    });
    return jData
}

app.get("/:username", (req: Request, res: Response) => {
  let user = req.params.username;
  
  let obj=fetchApi(user);
  console.log("after"+obj);
  
  res.send(`<h1>Repos</h1> <br> <p>${obj}</p>`)

  //fetch
  //res->send
});
app.listen(port, () => console.log(`express started on port ${port}`));
