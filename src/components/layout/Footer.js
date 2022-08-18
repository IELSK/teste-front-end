import "../../css/components/layout/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-company-personal-info">
        <h1 className="follow-us">Nos siga nas nossas redes sociais</h1>
        <img
          src="./assets/icons/SocialMedia.png"
          alt="Ícones de redes sociais"
        />
        <h1 className="about-us">Sobre O Cãoselheiro</h1>
        <p className="about-us-text">
          Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma
          empresa que nasceu para contribuir para uma melhor qualidade de vida
          dos cães e seus familiares humanos. Seus sócios são profissionais de
          educação canina que trabalham seguindo metodologias positivas de
          treinamento animal, encorajando e recompensando os acertos de nossos
          amigos em seus processos de adestramento. Aqui você encontrará apenas
          itens de qualidade comprovada e utilizados pessoalmente por seus
          idealizadores. Fique à vontade!
        </p>
      </div>
      <div className="footer-company-business-info">
        <div className="main-company-info">
          <div className="first-row">
            <nav className="fr-first-column">
              <h1>Assinatura</h1>
              <h1>Parceiros</h1>
            </nav>
            <nav className="fr-second-column">
              <h1>Institucional</h1>
              <p>Quem somos</p>
              <p>Política de privacidade</p>
              <p>Política comercial</p>
              <p>Política de devolução</p>
              <p>Regras de frete</p>
            </nav>
            <nav className="fr-third-column">
              <h1>Atendimento</h1>
              <p>Fale conosco</p>
              <p className="company-number">(11) 97212-1314</p>
              <p>ocaoselheiro@ocaoselheiro.com.br</p>
              <p>Trabalhe conosco</p>
            </nav>
          </div>
          <div className="second-row">
            <div className="sr-first-column">
              <h1>Formas de pagamento</h1>
              <img
                src="./assets/icons/CreditCards.png"
                alt="Ícones de cartões de crédito aceitos"
              />
            </div>
            <div className="sr-second-column">
              <h1>Segurança</h1>
              <img
                src="./assets/logos/LogoEncrypt.png"
                alt="Ícones da Let's Encrypt"
              />
            </div>
          </div>
        </div>
        <div className="secondary-company-info">
          <p className="legal-info">
            O Cãoselheiro Comércio LTDA
            <br /> CNPJ: 30.324.633/0001-16 © <br />
            Todos os direitos reservados. 2021
          </p>
          <img
            src="./assets/logos/CompanyLogos.png"
            alt="Logos da EConverse e VTEX respectivamente"
          />
        </div>
      </div>

      {/* <nav></nav> */}
    </footer>
  );
};

export default Footer;
