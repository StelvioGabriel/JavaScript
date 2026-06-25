function divExit(){
    var header = document.getElementById("header"); 
    var conteudo = header.innerHTML; 
    header.innerHTML = "<strong>"+ conteudo +"</strong>";
    var paragrafo = documet.createElement('p'); 
    paragrafo.setAtribute('title','novo parágrafo')
    var txt = document.createTextNode('Parágrafo adicionado a árvore DOM ');
    paragrafo.appendChild(txt); 
    header.appendChild(paragrafo);
 


}