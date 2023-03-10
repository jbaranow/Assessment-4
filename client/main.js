const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const myForm = document.getElementById('myForm')
const updateForm = document.getElementById('updateForm')
const dropDown = document.getElementById('drop')


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

const sendInput = myForm => {
    axios.post("http://localhost:4000/api/input/", myForm)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const updateInput = updateForm => {
    axios.put("http://localhost:4000/api/input/", updateForm)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const deleteInput = updateForm => {
    axios.delete("http://localhost:4000/api/input/", updateForm)
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

updateForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    let text = document.getElementById('form').value
    console.log(text)
  })

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
myForm.addEventListener('submit', sendInput)
updateForm.addEventListener('submit', updateInput)
dropDown.addEventListener('change', deleteInput)
