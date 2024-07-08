

function enviar(){
   let name = document.getElementById('nome').value
   let cpf = document.getElementById('cpf').value
   let tell = document.getElementById('telefone').value
   let email = document.getElementById('email').value
   let idade = document.getElementById('idade').value
   let gnh_mensal = document.querySelector("input[name='ganho_mensal']:checked").value
   
   alert('nome: '+name+'\ncpf: '+cpf+'\ntelefone: '+tell+ '\nemail: '+ email+'\nidade: '+idade+'\nganho mesnsal: '+ gnh_mensal)
   
   window.location.href='incitel.html'
} 

function voltar(){
   window.location.href='form.html'
} 
