let preveiwContainer = document.querySelector('.projects-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
document.querySelectorAll('.projects-container .project').forEach(project =>{
  project.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = project.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.closer').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


