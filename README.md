# Front-end Projeto Farmácia

Documentação de ferramentas e de usabilidade do repositório.

## Instalação
Após clonar o repositório instale as dependências e rode o projeto
```bash
  npm install
  npm start
```
É utilizado formatadores de código como Prettier e ESLint para melhorar qualidade do código. É recomendável adicionar essas configurações ao seu settings.json do VScode para que o código seja formatado automaticamente entre outras vantagens de desenvolvimento e para acompanhar o padrão do projeto corretamente.

Segue as configurações abaixo:
```json
"javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "javascript.validate.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
  "[javascript]": {
    "editor.suggestSelection": "recentlyUsed",
    "editor.suggest.showKeywords": false,
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "django-html": "html",
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "editor.codeActionsOnSave": {

    "source.fixAll.eslint": "explicit",
    "source.fixAll": "explicit"
  },
  "git.enableSmartCommit": true,
  "eslint.validate": [
      {
          "language": "javascript",
          "autoFix": true,
      },
      {
          "language": "javascriptreact",
          "autoFix": true,
      },
  ],
```

## Extensões e outras dependências
Para utilizar das configurações já feitas na seção anterior será necessário instalar essas extensões ao seu VS Code

* ESLint
* editorconfig for VS Code
* Prettier - Code formatter

## Git Flow
Iremos utilizar Git Flow no projeto, teremos as branchs main, release e develop como branchs principais e branchs para criar novas funcionalidades, corrigir bugs, entre outros. Para mais informações sobre COMANDOS, [clique aqui](https://www.alura.com.br/artigos/git-flow-o-que-e-como-quando-utilizar?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=20946398532&hsa_grp=153091871930&hsa_ad=688089973825&hsa_src=g&hsa_tgt=dsa-2258482180963&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAzoeuBhDqARIsAMdH14E-zktm1mamIKASgRKLbmqXJXAJc4awHSEyK0MMU0XbXUyKnlUhnScaAsuzEALw_wcB)

### Main
Será a versão final do projeto (código de produção)

### Release
É a ponte entre a develop e a main, uma versão mais estável para ser testada antes de subir para a main de forma definitiva.

### Develop
Será onde ficará as novas funcionalidades do projeto e onde iremos testar essas funcionalidades em uma versão mais estável do projeto

### Feature
Branch para desenvolvimento, serão diversas branchs (uma para cada nova funcionalidade) que serve para desenvolver e testar a partir da última versão da branch develop, ou seja, ao criar uma nova branch de feature, ela deve ser criada a partir da develop. Além disso o nome de cada branch feature deverá seguir o seguinte exemplo:

```
feature/nova-funcionalidade
```

# Back-end

Após clonar o repositório siga as seguintes instruções:
```cmd
copy .env_example .env
```
Copie o arquivo de exemplo do env, dentro desse arquivo adicione a porta e a URL do banco de dados no lugar de YOUR_PORT e URL_DATABASE, respectivamente:
```
PORT= YOUR_PORT
MONGO_URL= URL_DATABASE
```
Após isso, instale as dependências e inicie o projeto:
```
npm install
npm run dev
```




### BugFix
Criada a partir da develop, deverá ser criada ao ser identificado um bug no projeto, deverá ser criada da seguinte maneira:

```
bugfix/novo-bug
```
