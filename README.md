### poc de microfontend
esse projeto utiliza o framework single-spa para implementação da arquitetura de MFE (micro frontend)

## como organizar o projeto
- Criar uma pasta (por exemplo `/poc-mfe`), entrar na pasta e clonar os seguintes repositorios
1. https://github.com/eliaby-teixeira-koin/app-root.git
2. https://github.com/eliaby-teixeira-koin/appbase.git
3. https://github.com/eliaby-teixeira-koin/app1.git
4. https://github.com/eliaby-teixeira-koin/app2.git
5. https://github.com/eliaby-teixeira-koin/app3.git

## rodando os projetos localmente
- entrar em cada repositorio e executar um `npm i`
- executar primeiro o app-root com `npm start` vai rodar na porta 9000
- executar o appbase `npm start -- --port 8500`
- executar o app1 `npm start -- --port 8501`
- executar o app2 `npm start -- --port 8502`
- executar o app3 `npm start -- --port 8503`
- abrir o http://localhost:9000
