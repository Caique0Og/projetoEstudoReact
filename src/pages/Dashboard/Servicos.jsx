import { useState } from 'react';
import './Servicos.css';

function Servicos() {
  // Banco de dados inicial com 5 produtos
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Sala de tomografia',
      preco: 4599.99,
      descricao1: 'Processador Intel Core i7 de 11ª geração',
      descricao2: '16GB RAM DDR4, SSD NVMe 512GB',
      descricao3: 'Placa de vídeo NVIDIA RTX 3060 6GB',
      categoria: 'eletronicos'
    },
    {
      id: 2,
      nome: 'Consult[orio odontológico',
      preco: 3299.00,
      descricao1: 'Tela AMOLED 6.7" 120Hz',
      descricao2: 'Câmera tripla 108MP + ultra-wide + telephoto',
      descricao3: 'Bateria 5000mAh com carregamento rápido 65W',
      categoria: 'eletronicos'
    },
    {
      id: 3,
      nome: 'Cadeira Ergonômica Premium',
      preco: 1299.90,
      descricao1: 'Design ergonômico com apoio lombar ajustável',
      descricao2: 'Estofamento em mesh respirável',
      descricao3: 'Base em alumínio com rodízios de 360 graus',
      categoria: 'moveis'
    },
    {
      id: 4,
      nome: 'Tablet Profissional',
      preco: 2899.50,
      descricao1: 'Tela 11" Liquid Retina com True Tone',
      descricao2: 'Chip A14 Bionic com Neural Engine',
      descricao3: 'Compatível com Apple Pencil 2ª geração',
      categoria: 'informatica'
    },
    {
      id: 5,
      nome: 'Fone Bluetooth Noise Cancelling',
      preco: 899.99,
      descricao1: 'Cancelamento ativo de ruído (ANC)',
      descricao2: 'Bateria com até 30 horas de duração',
      descricao3: 'Som surround com drivers de 40mm',
      categoria: 'eletronicos'
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
      'eletronicos': 'Eletrônicos',
      'informatica': 'Informática',
      'moveis': 'Móveis',
      'vestuario': 'Vestuário',
      'outros': 'Outros'
    };
    return categorias[categoria] || categoria;
  };


  return (
    <div className="servicos-container">
      <h2>Cadastro de Produtos</h2>
      
      {/* Formulário de criação comentado para desabilitar criação */}
      
      <form onSubmit={handleSubmit} className="produto-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Nome do Produto</label>
            <input
              type="text"
              name="nome"
              value={produtoForm.nome}
              onChange={handleChange}
              placeholder="Ex: Notebook Gamer"
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
              <option value="eletronicos">Eletrônicos</option>
              <option value="informatica">Informática</option>
              <option value="moveis">Móveis</option>
              <option value="vestuario">Vestuário</option>
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
              placeholder="Ex: Processador Intel i7, 16GB RAM"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Descrição 2 (Especificações Técnicas)</label>
            <textarea
              name="descricao2"
              value={produtoForm.descricao2}
              onChange={handleChange}
              placeholder="Ex: SSD 512GB, Placa de Vídeo RTX 3060"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Descrição 3 (Informações Adicionais)</label>
            <textarea
              name="descricao3"
              value={produtoForm.descricao3}
              onChange={handleChange}
              placeholder="Ex: Garantia de 12 meses, Windows 11 incluído"
              rows="3"
            />
          </div>
        </div>

        <button type="submit" className="add-produto-btn">
          ➕ Adicionar Produto
        </button>
      </form>
     

      <div className="produtos-list">
        <h3>Produtos Cadastrados ({produtos.length})</h3>
        
        {produtos.length === 0 ? (
          <p className="empty-message">Nenhum produto cadastrado ainda.</p>
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
