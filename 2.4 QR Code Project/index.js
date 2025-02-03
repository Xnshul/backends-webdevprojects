
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { error } from 'console';
 
inquirer .prompt([{message:'type in your URl:', name:'URl',},])
.then((answer)=>{const url = answer.URL;
     var qv_svg = qr.image(url);
     qr-svg.pipe(fs.createReadStream("qr-img:png"));
     fs.writeFile("URL text", url ,(err)=>{ if (err) throw err;
          console.log("the file has been saved ");});})
.catch((error) => {
               if (error.isTtyError) {
                 // Prompt couldn't be rendered in the current environment
               } else {
                 // Something else went wrong
               }
             });
     