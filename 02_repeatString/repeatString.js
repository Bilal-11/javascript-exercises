const repeatString = function(text,times) {
    if(text === '' || times === 0)
        return '';
    else if (times < 0)
        return "ERROR";
    else
    {
        let returnText = '';
        for(let i = 1; i <= times ; i++)
        {
            returnText += text;
        }
        return returnText;
    }
};

// Do not edit below this line
module.exports = repeatString;
