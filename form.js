

function enviar(){
   let name = document.getElementById('nome').value;
   let cpf = document.getElementById('cpf').value;
   let tell = document.getElementById('telefone').value;
   let email = document.getElementById('email').value;
   let idade = document.getElementById('idade').value;
   let gnh_mensal = document.querySelector("input[name='ganho_mensal']:checked").value;
   let tv = document.getElementById('tv')
   let geladeira = document.getElementById('geladeira')
   let freezer = document.getElementById('freezer')
   let computador = document.getElementById('computador')
   let micronda = document.getElementById('micronda')
   let forno = document.getElementById('forno')





   if(tv.checked || geladeira.checked || freezer.checked || computador.checked || micronda.checked || forno.checked){
      alert('tv: '+ tv.value+'\ngeladeira: '+geladeira.value+'\nfreezer: '+freezer.value+'\ncomputador: '+computador.value+'\nmicroondas: '+micronda.value+'\nforno: '+forno.value)
   }
   alert('nome: '+name+'\ncpf: '+cpf+'\ntelefone: '+tell+ '\nemail: '+ email+'\nidade: '+idade+'\nganho mesnsal: '+ gnh_mensal)

   window.location.href='incitel.html'
} 

function voltar(){
   window.location.href='form.html'
} 
