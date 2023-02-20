const fs = require('fs');

module.exports = {
     basicJsonReader : (path) => {
        fs.readFile(path, 'utf8', (err, jsonString) => {
            if (err) {
                return;
            }
            try {
                return customer = JSON.parse(jsonString);
        } catch(err) {
                console.log('Error parsing JSON string:', err);
                return false;
            }
        })
    }

}