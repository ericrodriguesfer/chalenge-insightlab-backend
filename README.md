# API implementada em solução ao desafio Full Stack da Insight Lab

## SAIBA MAIS SOBRE O PROJETO

A API implementada consiste na resolução do desafio Full Stack da Insight Lab, essa a parte destinada a criação da API que implementa e gerencia as regras de negócio do projeto. Mas em que consiste o projeto? Se dá em uma agenda de eventos, onde um adminstrador (Governador) pode acessar a plataforma e gerenciar os eventos (CRUD: Criar, Editar, Atualizar e Deletar), assim o mesmo pode gerenciar os eventos os criando, adicionando datas e temas aos mesmos, como também adicionar as atividades de cada evento e monitorar quais atividades tem a cada evento, quantos participantes e quais são os participantes de cada evento. O segundo fluxo do acesso é o dos Participantes (Alunos, Semelhantes e etc), onde os mesmos podem ver os eventos e suas informações, assim como as atividades que terão o evento e com essas informações o mesmo pode decidir participar de dado evento de sua preferência ou não.

## TECNOLOGIAS QUE FORAM UTILIZADAS NO PROJETO
* Javascript
* NodeJS
* ExpressJs
* MongoDB/Mongoose
* Cors

## INFORMAÇÕES IMPORTANTES
* Adminstradores/Governadores só podem ser cadastrados de maneira interna por questões de segurança.
    * Como cadastrar um administrador:
    Acesse a URL da API via ferrementa como Insomnia ou Postman:
        ~~~
        url: https://chalenge-insightlab-api.herokuapp.com/admin/
        ~~~


        Crie uma requisição de verbo POST, com o body JSON que segue abaixo:
        ~~~
        {
            "name": "Jose da Silva", //Nome do administrador na plataforma
            "email": "jose.silva@gmail.com", //E-mail do administrador na plataforma
            "login": "jose", //Login de acesso que será usado para login
            "pass": "qwe123" //Senha de acesso que será usado para login
        }
        ~~~

        Usuários já cadastrados:
        ~~~
        Adminstrador:
            login: jose
            senha: qwe123

        Participantes:
            login: gustavo
            senha: qwe123

            login: douglas
            senha: qwe123
        ~~~

## CASO QUEIRA SABER MAIS SOBRE O PROJETO

Pode entrar em contato comigo pelo seguinte email: ericdesenvolvedor7@gmail.com