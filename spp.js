document.getElementById('button').addEventListener('click', (event) => {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = 'Mekelle,Tigray,Ethiopia';
  
    element_list.appendChild(new_li);
  
  });