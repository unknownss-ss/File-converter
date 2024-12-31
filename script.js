
function converting() {
  const value = parseFloat(document.getElementById('input-box').value);
  const unit = document.getElementById('select-size').value;
  const outputunit = document.getElementById('select-size-output').value;


const convertingby = {
  bytes:1,
  kilobytes: 1024,
  megabytes: 1024 * 1024,
  gigabytes: 1024 * 1024 * 1024,

};
if (isNaN(value) || value <= 0) {
  document.getElementById('output-box').value = "Invalid Input";
  return;
}
  
const bytesconversion = value *convertingby[unit];
const convertedvalue = bytesconversion / convertingby[outputunit];

// to not have any decimal points   
document.getElementById('output-box').value = Math.round(convertedvalue); 
                                       
}

document.getElementById('convert-button').addEventListener('click', converting);
