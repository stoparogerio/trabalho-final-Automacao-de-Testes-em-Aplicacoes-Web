# 🚀 Guia Rápido de Início

## Instalação em 3 Passos

### 1️⃣ Abra o PowerShell na pasta do projeto

```powershell
cd "c:\Users\Stopa\documents\PGATS\Automacao de Testes em Aplicacoes Web Apostila\trabalhoFinal"
```

### 2️⃣ Instale as dependências encontradas na seção devDependencies do arquivo package.json

```powershell
npm install
```

### 3️⃣ Execute os testes

**Modo Interativo (recomendado para iniciantes):**

```powershell
npm run cy:open
```

**Modo Headless (linha de comando):**

```powershell
npm run cy:run
```

## 📊 Ver Relatórios

Após executar os testes, abra o relatório HTML:

```powershell ou git bash
Start-Process "cypress\reports\index.html"
```

## 🎯 Comandos Mais Usados

| O que fazer               | Comando                                                  |
| ------------------------- | -------------------------------------------------------- |
| Abrir Cypress             | `npm run cy:open`                                        |
| Executar todos os testes  | `npm run cy:run`                                         |
| Executar teste específico | `npx cypress run --spec "cypress/e2e/testCase01*.cy.js"` |
| Limpar relatórios         | `npm run clean:reports`                                  |

## ❓ Problemas Comuns

**Erro ao instalar?**

- Verifique se o Node.js está instalado: `node --version`
- Delete a pasta `node_modules` e rode `npm install` novamente

**Testes falhando?**

- Verifique sua conexão com a internet
- O site pode estar temporariamente indisponível
- Veja os screenshots em `cypress/screenshots` para entender o erro

## 📚 Mais Informações

Veja o arquivo `README.md` completo para documentação detalhada.

---

✅ **Pronto! Seu ambiente está configurado.**
