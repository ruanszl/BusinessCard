## Este é um projeto Node.js escrito em Typescript 

# **Estrutura**

- Node.js
- Typescript
- Fastify
- tsx
- prisma
- @prisma/client
- prisma-erd-generator
- @mermaid-js/mermaid-cli
- @fastify/cors


# **Como esta estruturado**



Inicie o projeto com:
```bash
npm init
```

instale o Typescript em modo de desenvolvimento:
```bash
npm i typescript -D
```

Instale `tsx` para automatizar o processo de compilação do codigo: 
```bash
npm i tsx -D
```

Para isso altere em seu `package.json` o script:
```json
"scripts": {
    "dev": "tsx watch src/server.ts"
 },
```

Neste projeto usaremos um o fremework Fastify, ele é mais rapido que express e mais seguro e sua implementação e usabilidade é mais facil, alem dele ser mais rapido:

```bash
npm i fastify
```

Crie o arquivo `tsconfig.json`:

```bash
npx tsc --init
```

Altere o "target" no arquivo `tsconfig.json`:

```json
"target": "es2020",
```

Crie uma arquivo `server.ts` em uma pasta `src`:

```typescript
import Fastify from 'fastify'

async function bootstrap() {
    const fastify =  Fastify({
        logger: true,
    })

    fastify.get('/pools/count', () => {

        return {cout: 0}
    })

    await fastify.listen({port: 3333});
}

bootstrap();
```

Pode dar um start no servidor:

```bash
npm run dev
```

Usaremos o prisma pois ele permite aos desenvolvedores iteragir com um banco de dados usando uma API simples e segura, ele fornece uma maneira eficiente de modelar o banco e gerar consultas SQL mapeando o resultado para um obj typescript, usaremos o pacote @prisma/client que forndce uma API de facil usabilidade para iteragir com o banco:

```bash
npm i prisma -D
```

```bash
npm i @prisma/client
```

inicialize o prisma. Neste projeto usaremos o prisma com SQLite:

```bash
npx prisma init --datasource-provider SQLite
```

O comando acima gera uma pasta `prisma` com  arquivo `schema.prisma`, este arquivo é aonde vai ser criado todas as tabelas, colunas, relacionamentos etc do banco.

Recomendavel utilziar uma extensão de formatação para trabalhar com prisma.

Depois de criar por exemplo uma tabela no prisma, crie uma migration, responsavel pelo versionamento do banco de dados:

```bash
npx prisma migrate dev
```

Para visuzaliar o banco de dados no navegador execute:

```bash
npx prisma studio
```

Para criação de uma tabala automatizada de diagrama instale:

```bash
npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
```
Gere o arquivo .svg
```bash
npx prisma generate
```

Instale o fastify/cors para que o frontend consuma os dados do backend com segurança

```bash
npm i @fastify/cors
```

instale zod, uma bibilioteca de validação:

```bash
npm i zod
```

instale short-unique-id, uma biblioteca para geração unica de IDs.

```bash
npm i short-nique-id
```


