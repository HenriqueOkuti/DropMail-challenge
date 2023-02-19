# DropMail.me

## Descrição

Aplicação Front-End para utilização de Email temporário

## How to Run

É possível rodar a aplicação via Docker ou via Node. Primeiramente faça o clone do projeto

```
git clone git@github.com:HenriqueOkuti/DropMail-challenge.git
```

### Docker

Dentro da pasta do projeto, faça a build

```
docker build . -t dropmail:v1.0
```

E em seguida faça o run do projeto

```
docker run -p <PORT>:3000 -d dropmail:v1.0
```

Onde `<PORT>` é a porta para rodar a aplicação (ex: `<PORT>` = 3000)

Neste caso você pode acessar a aplicação em <p>`http://localhost:<PORT>/`</p>

### Node

Primeiro, popule um arquivo .env seguindo o modelo do arquivo .env.example, note que a variável `REACT_APP_CORS_ANYWHERE_URL` pode ser populada com o link padrão do cors-anywhere

```
REACT_APP_CORS_ANYWHERE_URL=https://cors-anywhere.herokuapp.com/
```

Ou você pode utilizar o meu fork do cors-anywhere

```
REACT_APP_CORS_ANYWHERE_URL=https://web-production-c18b.up.railway.app/
```

Também é necessário baixar as dependências

```
npm i
```

Em seguida você pode utilizar o start padrão do react

```
npm run start
```

Neste caso você pode acessar a aplicação no seu <a href="http://localhost:3000/">localhost</a>, caso a aplicação não abra automaticamente.
