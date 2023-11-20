# Apex Time

## Preparando Ambiente

- [Node](https://nodejs.org/en/download)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)

## Iniciando

Clone o repositorio e execute o comando 
```
npm i
```

Copie o arquivo .env.example para .env e adicione o seu mysql local

Rode os comandos abaixo para iniciar 
```bash
npm run build
```

```
node --env-file=.env .output/server/index.mjs
```

Acesse o localhost:3000
