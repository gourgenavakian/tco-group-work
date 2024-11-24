const fs = require('fs').promises;
const path = require('path');

async function createDirectories() {
    const parentDir = path.join(__dirname, 'mkdir');

    try {
        await fs.mkdir(parentDir, { recursive: true });

        for (let i = 1; i <= 10; i++) {
            const childDir = path.join(parentDir, `mkdir${i}`);
            await fs.mkdir(childDir, { recursive: true });
            if (i === 10) {
                const filePath = path.join(childDir, `app.txt`);
                await fs.writeFile(filePath, `This is file ${i} inside mkdir${i} folder`);
                console.log( `${childDir}, ${filePath}`);
            } else {
                console.log(`${childDir}`);
            }
        }
    } catch (err) {
        console.log('error creating ',err)
    }
}

createDirectories();
