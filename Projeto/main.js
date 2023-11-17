import './style.css'


const usuarios = [{
  nome: "Danilo",
  idade: 31,
  profissao: "Estudante"
},{
  nome: "Fabio",
  idade: 25,
  profissao: "Programador"
},{
  nome: "Julia",
  idade: 22,
  profissao: "Enfermeira"
}];


const user = usuarios.map((usuario) => usuario.profissao)

console.log(user)
