const wrapper =document.querySelector(".wrapper");

const qrInput =wrapper.querySelector(".form input");
  
const qrImg= wrapper.querySelector(".qr-code img");

const generateBtn = wrapper.querySelector(".form button");

/*
const copyBtn =wrapper.querySelector(".qr-code img");*/



generateBtn.addEventListener("click",()=>{
  
  
  let qrValue =qrInput.value;
  if(!qrValue) return;
  generateBtn.innerText="Generating QR Code....";
  qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}
`;
  
  console.log(qrImg.src)
  qrImg.addEventListener("load",()=>{
    generateBtn.innerText="Generate QR Code";
    wrapper.classList.add("active");
  })
  
  
})

qrInput.addEventListener("keyup",()=>{
  wrapper.classList.remove("active")
})



/*
copyBtn.addEventListener("click",()=>{
  let img=document.querySelector(".qr-code img");

   navigator.clipboard.writeText(img)
  console.log("hi")
}) */