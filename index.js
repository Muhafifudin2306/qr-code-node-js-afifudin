import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "Link",
      message: "Let's input your link : ",
    },
  ])
  .then((answers) => {
    console.log(answers);

    const url = answers.Link;

    var qr_png = qr.image(url, { type: "png" });

    qr_png.pipe(fs.createWriteStream("qr_code.png"));

    fs.writeFile("Link.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
