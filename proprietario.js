class Proprietario {
  constructor(nome, sobrenome, telefone, id){
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.telefone = telefone;
    this.veiculos = []; // Inicializa o array de veículos

    if (typeof nome !== 'string' || nome.trim() === '') {
      throw new Error('O nome deve ser uma string não vazia.');
    }
    if (typeof sobrenome !== 'string' || sobrenome.trim() === '') {
      throw new Error('O sobrenome deve ser uma string não vazia.');
    }
    if (typeof telefone !== 'string' || telefone.trim() === '') {
      throw new Error('Telefone não informado ou em um formato inválido. Por favor, informe seu telefone.');
    }
  }

  adicionaVeiculo(veiculo) {
    this.veiculos.push(veiculo);
  }

  removerVeiculo(veiculo) {
    const index = this.veiculos.indexOf(veiculo);
    if (index !== -1) {
      this.veiculos.splice(index, 1);
    }
  }

  listarVeiculos() {
    return this.veiculos;
  }

  static renderProprietario(proprietario) {
    return {
      id: proprietario.id,
      nome: proprietario.nome,
      sobrenome: proprietario.sobrenome,
      telefone: proprietario.telefone,
      veiculos: proprietario.veiculos
    };
  }

  // método estático para criar um novo proprietário
  static create(proprietarios, data) {
    const newProprietario = new Proprietario(proprietarios.length + 1, data.nome, data.sobrenome, data.telefone);
    proprietarios.push(newProprietario);
    return this.renderProprietario(newProprietario);
  }

  // método estático para listar todos os proprietários
  static listAll(proprietarios) {
    return proprietarios.map(proprietario => this.renderProprietario(proprietario));
  }

  // método estático para buscar um proprietário pelo id
  static findById(proprietarios, id) {
    return proprietarios.find(proprietario => proprietario.id === id);
  }

  // método estático para atualizar um proprietário
  static update(proprietarios, id, data) {
    const proprietario = this.findById(proprietarios, id);
    if (proprietario) {
      proprietario.nome = data.nome || proprietario.nome;
      proprietario.sobrenome = data.sobrenome || proprietario.sobrenome;
      proprietario.telefone = data.telefone || proprietario.telefone;
    }
    return this.renderProprietario(proprietario);
  }

  // método estático para deletar um proprietário
  static delete(proprietarios, id) {
    const proprietario = this.findById(proprietarios, id);
    if (proprietario) {
      const index = proprietarios.indexOf(proprietario);
      proprietarios.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = Proprietario;
