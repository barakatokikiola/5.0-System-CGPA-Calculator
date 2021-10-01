const add =document.querySelector('#add');
const courseCode=document.querySelector('#course');
const courseUnit=document.querySelector('#unit');
const grade =document.querySelector('#grade');
const tbody=document.querySelector('#tbody')
const table = document.querySelector('#table');
const calcgp = document.querySelector('#calcGp');
const calc = document.querySelector('#calc');
const clear = document.querySelector('#clear');
let gpArr=[];
const tfoot = document.querySelector('#tfoot');

add.addEventListener('click', () => {
  if(courseCode.value === '' || courseUnit.value <= 0 || grade.selectedIndex === 0){
    alert('Wrong input, Please enter a valid value')
    
  } else{
  const tr =document.createElement('tr');
  const tdcourseCode =document.createElement('td');
  tdcourseCode.innerHTML=(courseCode.value).toUpperCase();
  const tdcourseUnit =document.createElement('td');
  tdcourseUnit.innerHTML=courseUnit.value;
  const tdGrade=document.createElement('td');
  tdGrade.innerHTML=grade.options[grade.selectedIndex].text;
  tr.appendChild(tdcourseCode);
  tr.appendChild(tdcourseUnit);
  tr.appendChild(tdGrade);
  tbody.appendChild(tr);
  table.style.display='block';
  gpArr.push({'courseUnit': courseUnit.value, 'grade': grade.options[grade.selectedIndex].value })
  courseCode.value="";
  courseUnit.value="";
  grade.selectedIndex='0';
  calcgp.style.display= 'flex';
  
  }
})

calc.addEventListener('click', () => {
   let courseUnits=0, productOfUnitsAndGrades=0,
  sumOfproductOfUnitsAndGrades=0;
  
  gpArr.forEach(result => {
courseUnits += parseInt(result.courseUnit);
productOfUnitsAndGrades = parseInt(result.courseUnit) * parseInt(result.grade);
    sumOfproductOfUnitsAndGrades+= productOfUnitsAndGrades;
    
  });
  
  const tr = document.createElement('tr');
  tdTotalUnits=document.createElement('td'); 
  tdTotalUnits.innerHTML= `Your total units : ${courseUnits} `;
  
  tdCgpa = document.createElement('td');
  tdCgpa.setAttribute('colspan', 2);
  tdCgpa.innerHTML=`Your CGPA : ${(sumOfproductOfUnitsAndGrades/courseUnits).toFixed(2)}`;
  
  tr.appendChild(tdTotalUnits);
  tr.appendChild(tdCgpa);
  if(tfoot.querySelector('tr') !== null){
    tfoot.querySelector('tr').remove();
  }
  tfoot.appendChild(tr);
});

clear.addEventListener('click', () =>{
  gpArr = [];
  tbody.querySelectorAll('*').forEach(child => child.remove());
  if (tfoot.querySelector('tr') !== null) {
    tfoot.querySelector('tr').remove();
  }
  table.style.display='none';
  calcgp.style.display='none';
})