import { useState } from 'react';
import './trabalhe.css';

function Trabalhe() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    vaga: '',
    curriculo: null,
    mensagem: ''
  });

  const [selectedVaga, setSelectedVaga] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const vagas = [
    {
      id: 'frontend',
      titulo: 'Desenvolvedor Front-end React',
      nivel: 'Pleno/Sênior',
      modalidade: 'Híbrido',
      salario: 'R$ 8.000 - 15.000',
      requisitos: ['React 18+', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git'],
      diferenciais: ['GraphQL', 'Jest', 'Docker', 'AWS'],
      descricao: 'Desenvolver interfaces modernas e responsivas, trabalhar com APIs REST e GraphQL, e contribuir para a arquitetura front-end.',
      icone: '⚡'
    },
    {
      id: 'designer',
      titulo: 'Designer UX/UI',
      nivel: 'Júnior/Pleno',
      modalidade: 'Remoto',
      salario: 'R$ 5.000 - 10.000',
      requisitos: ['Figma', 'Adobe Creative Suite', 'Design Systems', 'Prototipagem'],
      diferenciais: ['After Effects', 'Framer', 'HTML/CSS básico'],
      descricao: 'Criar experiências digitais excepcionais, desenvolver design systems e colaborar com desenvolvedores.',
      icone: '🎨'
    },
    {
      id: 'marketing',
      titulo: 'Analista de Marketing Digital',
      nivel: 'Pleno',
      modalidade: 'Híbrido',
      salario: 'R$ 6.000 - 12.000',
      requisitos: ['Google Analytics', 'Google Ads', 'SEO/SEM', 'Meta Ads', 'Data Studio'],
      diferenciais: ['Python', 'SQL', 'Automation Tools'],
      descricao: 'Desenvolver estratégias de marketing digital, otimizar campanhas e analisar métricas de performance.',
      icone: '📈'
    },
    {
      id: 'fullstack',
      titulo: 'Desenvolvedor Full Stack',
      nivel: 'Sênior',
      modalidade: 'Híbrido',
      salario: 'R$ 12.000 - 20.000',
      requisitos: ['Node.js', 'React', 'PostgreSQL', 'AWS', 'Docker'],
      diferenciais: ['Kubernetes', 'Microservices', 'CI/CD'],
      descricao: 'Desenvolver aplicações completas, desde o front-end até infraestrutura, liderando projetos técnicos.',
      icone: '🚀'
    }
  ];

  const beneficios = [
    { icone: '🏥', titulo: 'Plano de Saúde', descricao: 'Cobertura completa para você e família' },
    { icone: '🦷', titulo: 'Plano Odontológico', descricao: 'Cuidado completo com sua saúde bucal' },
    { icone: '🎓', titulo: 'Auxílio Educação', descricao: 'Investimento em cursos e certificações' },
    { icone: '💻', titulo: 'Home Office', descricao: 'Flexibilidade total para trabalhar de casa' },
    { icone: '🎯', titulo: 'Bônus Performance', descricao: 'Reconhecimento financeiro por resultados' },
    { icone: '🏖️', titulo: 'Férias Flexíveis', descricao: 'Escolha quando descansar' },
    { icone: '🍕', titulo: 'Vale Alimentação', descricao: 'R$ 800/mês para suas refeições' },
    { icone: '🚗', titulo: 'Vale Transporte', descricao: 'Cobertura completa do deslocamento' }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envio
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  const openVagaModal = (vaga) => {
    setSelectedVaga(vaga);
  };

  const closeVagaModal = () => {
    setSelectedVaga(null);
  };

  return (
    <div className="trabalhe-container">
      {/* Hero Section */}
      <div className="trabalhe-hero">
        <h1 className="trabalhe-title">Trabalhe Conosco</h1>
        <p className="trabalhe-subtitle">
          Construa o futuro conosco. Seja parte de uma equipe que transforma ideias em realidade.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Colaboradores</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Satisfação</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.8</span>
            <span className="stat-label">Glassdoor</span>
          </div>
        </div>
      </div>

      {/* Cultura Section */}
      <section className="cultura-section">
        <h2 className="section-title">Nossa Cultura</h2>
        <div className="cultura-grid">
          <div className="cultura-card">
            <div className="cultura-icon">🌱</div>
            <h3>Crescimento</h3>
            <p>Investimos no desenvolvimento contínuo de cada pessoa da equipe</p>
          </div>
          <div className="cultura-card">
            <div className="cultura-icon">🤝</div>
            <h3>Colaboração</h3>
            <p>Trabalhamos juntos para alcançar objetivos extraordinários</p>
          </div>
          <div className="cultura-card">
            <div className="cultura-icon">💡</div>
            <h3>Inovação</h3>
            <p>Encorajamos novas ideias e experimentação constante</p>
          </div>
          <div className="cultura-card">
            <div className="cultura-icon">⚖️</div>
            <h3>Work-Life Balance</h3>
            <p>Respeitamos seu tempo e promovemos equilíbrio saudável</p>
          </div>
        </div>
      </section>

      {/* Vagas Section */}
      <section className="vagas-section">
        <h2 className="section-title">Oportunidades Abertas</h2>
        <div className="vagas-grid">
          {vagas.map(vaga => (
            <div key={vaga.id} className="vaga-card" onClick={() => openVagaModal(vaga)}>
              <div className="vaga-header">
                <span className="vaga-icon">{vaga.icone}</span>
                <div className="vaga-badges">
                  <span className="badge-nivel">{vaga.nivel}</span>
                  <span className="badge-modalidade">{vaga.modalidade}</span>
                </div>
              </div>
              <h3>{vaga.titulo}</h3>
              <p className="vaga-salario">{vaga.salario}</p>
              <p className="vaga-preview">{vaga.descricao}</p>
              <div className="vaga-tech">
                {vaga.requisitos.slice(0, 3).map((req, index) => (
                  <span key={index} className="tech-tag">{req}</span>
                ))}
                {vaga.requisitos.length > 3 && (
                  <span className="tech-more">+{vaga.requisitos.length - 3}</span>
                )}
              </div>
              <button className="btn-ver-mais">Ver Detalhes</button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="beneficios-section">
        <h2 className="section-title">Benefícios que Oferecemos</h2>
        <div className="beneficios-grid">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="beneficio-card">
              <div className="beneficio-icon">{beneficio.icone}</div>
              <h4>{beneficio.titulo}</h4>
              <p>{beneficio.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Processo Seleção */}
      <section className="processo-section">
        <h2 className="section-title">Nosso Processo de Seleção</h2>
        <div className="processo-timeline">
          <div className="processo-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Análise do Currículo</h4>
              <p>Revisamos cuidadosamente seu perfil e experiência</p>
            </div>
          </div>
          <div className="processo-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Entrevista com RH</h4>
              <p>Conversa inicial para nos conhecermos melhor</p>
            </div>
          </div>
          <div className="processo-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Teste Técnico</h4>
              <p>Desafio prático relacionado à vaga</p>
            </div>
          </div>
          <div className="processo-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Entrevista Técnica</h4>
              <p>Bate-papo com o time sobre sua solução</p>
            </div>
          </div>
          <div className="processo-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>Proposta</h4>
              <p>Apresentação da oferta e próximos passos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="formulario-section">
        <h2 className="section-title">Candidate-se Agora</h2>
        <div className="form-container">
          {isFormSubmitted ? (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h3>Candidatura Enviada!</h3>
              <p>Obrigado pelo interesse! Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form className="curriculo-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="vaga">Vaga de Interesse</label>
                  <select
                    id="vaga"
                    name="vaga"
                    value={formData.vaga}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione uma vaga</option>
                    {vagas.map(vaga => (
                      <option key={vaga.id} value={vaga.id}>{vaga.titulo}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="curriculo">Currículo (PDF)</label>
                  <input
                    type="file"
                    id="curriculo"
                    name="curriculo"
                    onChange={handleInputChange}
                    accept=".pdf"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Conte sobre você</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Compartilhe sua experiência, motivações e por que quer fazer parte do nosso time..."
                ></textarea>
              </div>

              <button type="submit" className="btn-enviar">
                Enviar Candidatura
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Modal Vaga */}
      {selectedVaga && (
        <div className="modal-overlay" onClick={closeVagaModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeVagaModal}>×</button>
            
            <div className="modal-header">
              <span className="modal-icon">{selectedVaga.icone}</span>
              <div>
                <h2>{selectedVaga.titulo}</h2>
                <div className="modal-badges">
                  <span className="badge-nivel">{selectedVaga.nivel}</span>
                  <span className="badge-modalidade">{selectedVaga.modalidade}</span>
                  <span className="badge-salario">{selectedVaga.salario}</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>Descrição da Vaga</h3>
                <p>{selectedVaga.descricao}</p>
              </div>

              <div className="modal-section">
                <h3>Requisitos Obrigatórios</h3>
                <div className="requisitos-list">
                  {selectedVaga.requisitos.map((req, index) => (
                    <span key={index} className="requisito-tag">{req}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Diferenciais</h3>
                <div className="requisitos-list">
                  {selectedVaga.diferenciais.map((dif, index) => (
                    <span key={index} className="diferencial-tag">{dif}</span>
                  ))}
                </div>
              </div>

              <button 
                className="btn-candidatar-modal"
                onClick={() => {
                  setFormData(prev => ({...prev, vaga: selectedVaga.id}));
                  closeVagaModal();
                  document.querySelector('.formulario-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Candidatar-se a Esta Vaga
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Trabalhe;