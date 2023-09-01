class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado!');
        }
        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }
    
    atualizar(matricula, nome, idade) {
        const alunoExistente = this.pesquisarPorMatricula(matricula);
        if (!alunoExistente) {
            throw new Error('Aluno não encontrado!');
        }
        if (idade && idade < 18) {
            throw new Error("Aluno não pode ser menor de idade.")
        }
        alunoExistente.nome = nome;
        alunoExistente.idade = idade;
        return alunoExistente;
    }
    
    pesquisarPorMatricula(matricula) {
        return this.repositorio.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    listarMenoresIdade() {
        return this.repositorio.listar().filter(aluno => aluno.idade < 18);
    }
}
