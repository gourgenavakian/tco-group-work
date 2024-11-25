const fs = require('fs');
const path = require('path');

const text = "Dear Team Leader!" +
    "The first part of the task has been successfully completed.I sincerely apologize for submitting the task  late ." +
    "As a punishment, I would like you to  assing  me one more task)";

// //Ստեղծելու եմ գլղավոր ֆաըլը
const firstFolder = "firstFolder";
const secondFolder = path.join(firstFolder, 'secondFolder');
const txtFile = path.join(secondFolder, 'file.txt');

fs.mkdir(firstFolder, { recursive: true }, (err) => {
    if (err) {
        console.error("There is no firstFolder", err);
        return;
    }
    console.log("Congratulations! The firstFolder has been created!");


    fs.mkdir(secondFolder, { recursive: true }, (err) => {
        if (err) {
            console.error("There is no secondFolder", err);
            return;
        }
        console.log("Congratulations! The secondFolder has been created!");

///////Ջնջում ենք ֆաըլերը
        fs.writeFile(txtFile, text, (err) => {
            if (err) {
                console.error("There is no txtFile", err);
                return;
            }
            console.log("Congratulations! The txtFile has been created!", text);

            fs.unlink(txtFile, (err) => {
                if (err) {
                    console.error("Error", err);
                    return
                }
                console.log('txtFile deleted');

                fs.rmdir(secondFolder, (err) => {
                    if (err) {
                        console.error("Error", err);
                        return
                    }
                    console.log("secondFile deleted");
                })

                fs.rmdir(firstFolder, (err) => {
                    if (err) {
                        console.error("Error", err);
                        return
                    }
                    console.log("firstFile deleted");
                })
            })
        });
    });
});




