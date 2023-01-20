async function getAdvice(){
     const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    
   console.log(data)

   const {slip} = data;
   document.querySelector('.main').textContent = slip.advice;
document.querySelector(".text").textContent = slip.id;

   
}
getAdvice()