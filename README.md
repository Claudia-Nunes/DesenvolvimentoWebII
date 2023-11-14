# Aplicativo Web de Resultados de Loteria

Bem-vindo ao Aplicativo Web de Resultados de Loteria! Este projeto visa fornecer uma interface elegante e fácil de usar para visualizar os resultados dos últimos sorteios da Mega-sena, Quina e Timemania. Cada modalidade de loteria possui sua própria página distinta acessível pelas rotas /megasena, /quina e /timemania, respectivamente.

## Tecnologias Utilizadas

- React.js: Biblioteca JavaScript para construção de interfaces de usuário.
- styled-components: Biblioteca para estilização de componentes no React.
- React Router: Roteamento para criar páginas distintas para cada modalidade de loteria.

## Estrutura do Projeto

O projeto está organizado de forma clara para facilitar a manutenção e extensão:

- **/src:**
  - **/components:** Componentes reutilizáveis.
    - **MegaSenaResult.js**
    - **QuinaResult.js**
    - **TimemaniaResult.js**
  - **/pages:** Páginas do aplicativo.
    - **MegaSenaPage.js**
    - **QuinaPage.js**
    - **TimemaniaPage.js**
  - **/styles:** Estilos utilizando styled-components.
    - **globalStyles.js:** Estilos globais.
    - **MegaSenaStyles.js:** Estilos para a página da Mega-sena.
    - **QuinaStyles.js:** Estilos para a página da Quina.
    - **TimemaniaStyles.js:** Estilos para a página da Timemania.
  - **App.js:** Configuração de rotas e componentes principais.
  - **index.js:** Ponto de entrada do aplicativo.
- **/public:** Arquivos públicos.

## Como Executar o Projeto

1. Clone o repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Navegue até o diretório do projeto: `cd nome-do-repositorio`
3. Instale as dependências: `npm install`
4. Inicie o aplicativo: `npm start`
5. Acesse no navegador: [http://localhost:3000](http://localhost:3000)

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Basta seguir os passos:

1. Fork o repositório
2. Crie uma branch para a sua feature: `git checkout -b feature/nova-feature`
3. Faça as alterações e commit: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## Autor

[Claudia Nunes]

## Licença

Este projeto está sob a licença [MIT License](LICENSE).

---

Esperamos que você desfrute da experiência de usar nosso aplicativo web de resultados de loteria! Se encontrar problemas ou tiver sugestões, fique à vontade para abrir uma issue. Agradecemos pela sua colaboração!
