module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Bide your time, for success is near.", "Embrace this love relationship you have.", "I learn by going where I have to go.", "It’s time to get moving. Your spirits will lift accordingly.", "Technology is the art of arranging the world so we do not notice it."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    sendInput: (req, res) => {

        res.status(200).send("Input Recieved!")

        //test code below
        /*let { id } = req.params;
        let { goal } = req.body;

        if(!goal) {
            res.status(418).send({message: 'We need a goal!'})
        }

        res.send({ goal: `Your goal is: ${goal} with ID: ${id}`})*/
    },

    updateInput: (req, res) => {

        res.status(200).send("Input updated!")
    },

    deleteInput: (req, res) => {

        res.status(200).send("Deleted Goal")
    }

}