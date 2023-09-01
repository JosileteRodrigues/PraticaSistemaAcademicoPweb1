const controlador = new AlunoControlador();
const disciplinaControlador = new DisciplinaControlador();

function inserirAlunoNaDisciplina() {
    const campoMatricula = document.querySelector("#matricula-aluno");
    const campoCodigo = document.querySelector("#codigo-disciplina-alunos");

    const matriculaAluno = Number(campoMatricula.value);
    const codigoDisciplina = Number(campoCodigo.value);

    const aluno = alunoControlador.buscarAlunoPorMatricula(matriculaAluno)[0];

    if(!aluno) alert("Aluno não encontrado");

    disciplinaControlador.inserirAlunoNaDisciplina(aluno, codigoDisciplina);

}
