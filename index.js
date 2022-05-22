document.addEventListener("DOMContentLoaded", () => {
   

    let form = document.querySelector("form")
    
    form.addEventListener("submit",function(e){
        e.preventDefault();
        
        let chapter = e.target.number.value
    
       
      
        let url = `http://api.quran.com/api/v3/chapters/${chapter}?`
    
            fetch(url).then(response=>response.json())
            .then(data=>{
                 
              let container =   document.querySelector(".container")
    
                container.innerHTML = `
                
                  <p> <strong> Arabic Name :</strong> ${data.chapter.name_arabic}</p>
                  <p> <strong> Simple Name :</strong> ${data.chapter.name_simple}</P>
                  <p><strong> Pages Number:</strong> [${data.chapter.pages}]</P>
                  <p> <strong> Revelation Order:</strong> ${data.chapter.revelation_order}</P>
                  <p><strong> Revelation Place:</strong> ${data.chapter.revelation_place}</P>
                

                `
              
              
              
             
           
    
    
            })
           
           
         
        
    
       


 })


 
 
 let container = document.querySelector(".container")
 
 //creating a delete button
 
 
 document.getElementById("delete").addEventListener("click", (e)=>{
  e.preventDefault();
        
   container.innerHTML= " ";
 
 })

// creating a copy button

let copyText = document.getElementById("copy")
copyText.addEventListener("click",() => {
  
  navigator.clipboard.writeText(container.innerText);

  copyText.textContent = "Copied !"
  




})





 


})