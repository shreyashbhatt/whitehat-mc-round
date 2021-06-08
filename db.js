//gagandeep.ahuja@whitehatjr.com

module.exports = (function() {
    let instance = null;
    return {
        getInstance() {
            if(instance == null) 
            {
                instance = [];
            }
            return instance;
        }
    }
})();