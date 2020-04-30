let { exec } = require("child_process");
console.log('Running key test:');
exec(`python key.py VisualBoyAdvance-M s`, (err) => {
    if (err) throw new Error(err);
});
// exec(`python key.py Notepad s`, (err) => {
//     if (err) throw new Error(err);
// });