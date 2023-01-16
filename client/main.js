const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const myForm = document.getElementById('myForm')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let text = document.getElementById('form').value
  console.log(text)
})

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)