//ABRIR MODAL CABEÇALHO CATEGORIAS
const modalCategorias = document.querySelector('.categorias')

function topicos(){
    modalCategorias.classList.add('activeModal')
}
function fecharModal(){
    modalCategorias.classList.remove('activeModal')
}

//ABRIR MODAL ADICIONAR PRESENTE
const addItems = document.querySelector('.adicionarItem')

function adicionar(){
    addItems.classList.add('activeAddItem')
}
function fecharItemAdd(){
    addItems.classList.remove('activeAddItem')
}


// DARK MODE
function themeToggle(){
    return document.documentElement.classList.toggle('dark');
}



   