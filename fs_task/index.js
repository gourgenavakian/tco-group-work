const fs=require(`fs`)//modul e  vory hnaravorutyun e talis fayler ev papkaner stexcel ,kardal,jnjel
const path=require('path')// uxu het ashxatelu hamar

function createDir(baseDir,folderCount,fileName,fileContent){
    //baseDir-himnakan uxi
    //papkaneri qanak,verjin fayli anuny,verji fayli parunakutyuny

    let currentDir=baseDir//himnakam uxi
    for(let i = 1;i<=folderCount;i++){
        currentDir=path.join(currentDir,`folder_${i}`)//yuraqanchyur ciklum nor papkayi anuny avelacnum enq himanakan uxun
        if(!fs.existsSync(currentDir)){//stugum te ardyoq papkan goyutyun uni
            fs.mkdirSync(currentDir)//ete chka apa stexcum enq ayn
        }
    }

    const filePath=path.join(currentDir,fileName)//verji papkayi mej avelacnum enq fayli anuny
    fs.writeFileSync(filePath,fileContent,'utf-8')//fayli parunakutyuny petq e lini textayin utf-8 kodavormamb
    console.log(`Created file at ${filePath}`)//fayly hajox stexcvelu depqym tpum e hetevyaly
}



// function  deleteDir(dirName){
//     if(fs.existsSync(dirName)){
//         fs.rmSync(dirName,{recursive:true})
//     }
// }


function deleteDir(baseDir, folderCount, fileName) {
    let currentDir = baseDir;

    // stexcum enq fayli uxin
    for (let i = 1; i <= folderCount; i++) {
        currentDir = path.join(currentDir, `folder_${i}`);
    }
    const filePath = path.join(currentDir, fileName);

    // jnjum e ete fayly goyutyun uni
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted file at ${filePath}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }

    // jnjum enq meky myusi hetevic
    for (let i = folderCount; i > 0; i--) {
        currentDir = baseDir;
        for (let j = 1; j <= i; j++) {
            currentDir = path.join(currentDir, `folder_${j}`);
        }

        if (fs.existsSync(currentDir)) {
            try {
                fs.rmdirSync(currentDir); //miayn dadark txtapanaky jnjelu hamar
                // console.log(`Deleted folder: ${currentDir}`);//ete cankanum enq tpel jnjman hertakanutyuny
            } catch (err) {
                console.log(`Could not delete folder (not empty): ${currentDir}`);
            }
        } else {
            console.log(`Folder not found: ${currentDir}`);
        }
    }
}


const baseDir = path.join(__dirname);
const folderCount = 5;
const fileName = 'example.txt';
const fileContent = 'This is an example text file.';


// createDir(baseDir, folderCount, fileName, fileContent);


deleteDir(baseDir, folderCount, fileName);
