class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

console.log( new Usuario('test@test.com', 'T3$t') );
console.log( new Admin('test@test.com', 'T3$t') );

const usuarios = [  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }
                 ,  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' }
                 ,  { nome: 'Lucas', idade: 30, empresa: 'Facebook' }];

console.log( usuarios.map(item => item.idade) );
console.log( usuarios.filter(item => (item.empresa === 'Rocketseat' && item.idade > 18)) );
console.log( usuarios.find(item => item.empresa === 'Google') );


// const usuariosIdadeModif = usuarios.map(item => { item.idade = item.idade * 2; return item;});
console.log( usuarios.map(item => {
                            item.idade = item.idade * 2;
                            return item;
                        }).filter(item => item.idade < 50) );

const arr = [1, 2, 3, 4, 5];
console.log( arr.map(item => item + 10) );

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log( mostraIdade(usuario) );