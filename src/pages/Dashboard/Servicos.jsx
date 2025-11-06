import { useState } from 'react';
import './Servicos.css';

function Servicos() {
  // Banco de dados inicial com 5 produtos
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Sala de tomografia',
      preco: 4599.99,
      descricao1: 'Sala projetada para exames de imagem de alta precisão, oferecendo conforto e eficiência no atendimento.',
      descricao2: 'Tomógrafo Philips 64 canais, mesa deslizante automatizada, iluminação cirúrgica LED, isolamento radiológico.',
      descricao3: 'Integração com o sistema PACS para armazenamento e compartilhamento seguro de imagens.',
      categoria: 'Diagnóstico por Imagem'
    },
    {
      id: 2,
      nome: 'Sala de Ultrassonografia',
      preco: 3299.00,
      descricao1: 'Ambiente silencioso, climatizado e confortável para exames de rotina e diagnósticos de imagem.',
      descricao2: 'Ultrassom 3D de alta frequência, impressora térmica, sistema de gel aquecido, iluminação indireta.',
      descricao3: 'Compatível com exames obstétricos e cardiológicos.',
      categoria: 'Diagnóstico por Imagem'
    },
    {
      id: 3,
      nome: 'Sala de Ressonância Magnética',
      preco: 1299.90,
      descricao1: 'Ambiente isolado magneticamente, preparado para exames detalhados e de alta resolução.',
      descricao2: 'Ressonância 1.5T, bobinas dedicadas, software de imagem DICOM, painel de controle externo.',
      descricao3: 'Sistema antivibração e cancelamento de ruído para maior conforto do paciente.',
      categoria: 'Diagnóstico por Imagem'
    },
    {
      id: 4,
      nome: 'Consultório Médico Padrão',
      preco: 899.50,
      descricao1: 'Sala funcional para consultas médicas de diversas especialidades.',
      descricao2: 'Mesa e cadeira ergonômicas, pia clínica, computador com prontuário eletrônico e iluminação suave.',
      descricao3: 'Possibilidade de personalização visual conforme a especialidade médica.',
      categoria: 'Atendimento Clínico'
    },
    {
      id: 5,
      nome: 'Sala de Coleta Laboratorial',
      preco: 899.99,
      descricao1: 'Sala segura e higienizada para coleta de sangue e amostras biológicas.',
      descricao2: 'Cadeiras de coleta ajustáveis, centrífuga, refrigerador de amostras e bancada de aço inox.',
      descricao3: 'Sistema de rastreio digital integrado ao banco de dados laboratorial.',
      categoria: 'Análises Clínicas'
    }
  ]);


  const [produtoForm, setProdutoForm] = useState({
    nome: '',
    preco: '',
    descricao1: '',
    descricao2: '', 
    descricao3: '',
    categoria: ''
  });


  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (produtoForm.nome && produtoForm.preco) {
      const novoProduto = {
        id: Date.now(),
        ...produtoForm,
        preco: parseFloat(produtoForm.preco)
      };
      setProdutos([...produtos, novoProduto]);
      setProdutoForm({
        nome: '',
        preco: '',
        descricao1: '',
        descricao2: '',
        descricao3: '',
        categoria: ''
      });
    }
  };
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProdutoForm(prev => ({ ...prev, [name]: value }));
  };


  const removerProduto = (id) => {
    setProdutos(produtos.filter(produto => produto.id !== id));
  };


  // Função para formatar o nome da categoria
  const formatarCategoria = (categoria) => {
    const categorias = {
      'diagnosticoporimagem': 'DiagP/Imagem',
      'atendimentoclinico': 'Atendimento Clínico',
      'analisesclinicas': 'Análises Clínicas',
      'outros': 'Outros'
    };
    return categorias[categoria] || categoria;
  };


  return (
    <div className="servicos-container">
      <h2>Cadastrar Salas</h2>
      
      {/* Formulário de criação comentado para desabilitar criação */}
      
      <form onSubmit={handleSubmit} className="produto-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Nome da Sala</label>
            <input
              type="text"
              name="nome"
              value={produtoForm.nome}
              onChange={handleChange}
              placeholder="Ex: Sala de Fisioterapia"
              required
            />
          </div>

          <div className="form-group">
            <label>Preço (R$)</label>
            <input
              type="number"
              name="preco"
              value={produtoForm.preco}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label>Categoria</label>
            <select
              name="categoria"
              value={produtoForm.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="diagnosticoporimagem">DiagP/Imagem</option>
              <option value="atendimentoclinico">Atendimento Clínico</option>
              <option value="analisesclinicas">Analíses Clínicas</option>
              <option value="outros">Outros</option>
            </select>
          </div>
        </div>

        <div className="descricoes-grid">
          <div className="form-group">
            <label>Descrição 1 (Característica Principal)</label>
            <textarea
              name="descricao1"
              value={produtoForm.descricao1}
              onChange={handleChange}
              placeholder="Ex: Espaço amplo e ventilado, projetado para reabilitação física e terapias personalizadas."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Descrição 2 (Especificações Técnicas)</label>
            <textarea
              name="descricao2"
              value={produtoForm.descricao2}
              onChange={handleChange}
              placeholder="Ex: Macas, faixas elásticas, esteira, bicicleta ergométrica, colchonetes e bolas terapêuticas."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Descrição 3 (Informações Adicionais)</label>
            <textarea
              name="descricao3"
              value={produtoForm.descricao3}
              onChange={handleChange}
              placeholder="Ex: Sistema de som ambiente relaxante e aromaterapia opcional."
              rows="3"
            />
          </div>
        </div>

        <button type="submit" className="add-produto-btn">
          ➕ Adicionar Sala
        </button>
      </form>
     

      <div className="produtos-list">
        <h3>Salas Cadastradas ({produtos.length})</h3>
        
        {produtos.length === 0 ? (
          <p className="empty-message">Nenhuma sala foi cadastrada ainda.</p>
        ) : (
          <div className="produtos-grid">
            {produtos.map(produto => (
              <div key={produto.id} className="produto-card">
                <div className="produto-header">
                  <h4>{produto.nome}</h4>
                  <span className="categoria-badge">
                    {formatarCategoria(produto.categoria)}
                  </span>
                </div>
                
                <div className="produto-preco">
                  R$ {produto.preco.toFixed(2)}
                </div>

                <div className="produto-descricoes">
                  {produto.descricao1 && (
                    <p><strong>Principal:</strong> {produto.descricao1}</p>
                  )}
                  {produto.descricao2 && (
                    <p><strong>Especificações:</strong> {produto.descricao2}</p>
                  )}
                  {produto.descricao3 && (
                    <p><strong>Adicional:</strong> {produto.descricao3}</p>
                  )}
                </div>

                <button 
                  onClick={() => removerProduto(produto.id)}
                  className="remove-produto-btn"
                >
                  🗑️ Remover
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Servicos;
