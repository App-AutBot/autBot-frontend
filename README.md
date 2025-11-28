# 💻 AutBot — Frontend

> **Interface web acessível, empática e responsiva para o ecossistema AutBot.**

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🧠 O que é o AutBot?

O **AutBot** é uma ferramenta web desenvolvida para oferecer suporte e orientação a pessoas interessadas no Transtorno do Espectro Autista (TEA).

Este repositório contém o **Frontend** da aplicação: a camada visual com a qual estudantes, professores, desenvolvedores e familiares interagem. Nosso foco principal é a **Acessibilidade (a11y)** e a **Usabilidade**, garantindo que a navegação seja fluida para pessoas com diferentes necessidades cognitivas e motoras.

O sistema consome uma API que utiliza documentos oficiais e legislações para fornecer respostas seguras.

### 🎯 Objetivos do Projeto
* **Acessibilidade da Informação:** Interface desenhada para alto contraste, leitura facilitada e navegação por teclado.
* **Apoio à Comunidade:** Design inclusivo para atender pais, educadores e autistas.
* **Automatização do Suporte:** Chatbot integrado visualmente amigável.
* **Histórico Visual:** Interface para consulta e gerenciamento de conversas passadas.

---

## ✨ Funcionalidades (v2025.2)

Além do Chatbot central, o Frontend agora conta com módulos de gestão:

* **💬 Interface de Chat:** Interação em tempo real com o AutBot, com feedback visual de carregamento e formatação de resposta.
* **📅 Agenda Interativa:** Visualização e edição de rotinas, horários de medicamentos e terapias.
* **📊 Dashboard:** Painel de controle com resumos visuais de atividades e configurações de perfil.
* **🔍 Busca de Profissionais:** Interface de busca e listagem de especialistas com filtros de localização.
* **🔐 Autenticação:** Telas de Login, Cadastro e Recuperação de Senha responsivas.

---

## 🛠️ Tecnologias do Frontend

| Tecnologia | Versão | Descrição |
| :--- | :--- | :--- |
| **React.js** | `19.1.0` | Biblioteca principal de interface. |
| **Node.js** | `20.19.2` | Ambiente de execução. |
| **npm** | `10.8.2` | Gerenciador de pacotes. |
| **Axios/Fetch** | - | Consumo da API Backend. |
| **CSS/Styled** | - | Estilização com foco em acessibilidade. |

---

## 📘 Arquitetura e Diagramas

A estrutura do projeto foi planejada para garantir escalabilidade e segurança. Abaixo, os fluxos principais representados nos diagramas do sistema.

### 1. Diagrama de Sequência (Fluxo de Usuário)
Representa o fluxo completo desde a entrada do usuário na plataforma:
> *Cadastro ➞ Login ➞ Alteração de Perfil ➞ Interação Inicial com o Chatbot.*

### 2. Diagrama de Sequência (Processamento)
Detalha como o frontend se comunica com o backend e a IA:
> *Envio de mensagem ➞ Processamento no GPT/Llama ➞ Consulta ao Histórico de Sessões ➞ Renderização da Resposta.*

### 3. Diagrama de Caso de Uso
Visão geral das funcionalidades disponíveis na interface:
* Manter Perfil (CRUD).
* Consultar Chatbot.
* Gerenciar Agenda.
* Buscar Profissionais.

---

## 🚀 Como Executar o Frontend

Siga os passos abaixo para rodar a interface em seu ambiente local.

### Pré-requisitos
* Ter o **Backend** do AutBot rodando (localmente ou em servidor) para que as requisições funcionem.
* Node.js instalado.

### Passo a Passo

#### 1. Clonar o Repositório
```bash
git clone [https://github.com/accessible-bot/accessible-bot-frontend.git](https://github.com/accessible-bot/accessible-bot-frontend.git)
cd accessible-bot-frontend
```

#### 2. Instalar Dependências
```bash
npm install
```

#### 3. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto para apontar para o seu backend:

```bash
REACT_APP_API_URL=http://localhost:5000/api
```
#### 4. Iniciar o Projeto

```bash
npm start
A aplicação abrirá automaticamente em: http://localhost:3000
```
## 📂 Estrutura de Pastas (Resumo)
Plaintext
```bash
src/
├── assets/         # Imagens, ícones e arquivos estáticos
├── components/     # Componentes reutilizáveis (Botões, Inputs, Cards)
├── contexts/       # Context API (Auth, Theme)
├── hooks/          # Hooks personalizados
├── pages/          # Páginas principais (Login, Dashboard, Chat, Agenda)
├── services/       # Configuração do Axios e chamadas à API
├── styles/         # Arquivos de estilo globais e temas
└── utils/          # Funções auxiliares e formatadores
```

## 🤝 Contribuição
Contribuições para melhorar a acessibilidade e usabilidade são muito bem-vindas!

Faça um Fork do projeto.

Crie uma Branch (git checkout -b feature/MelhoriaVisual).

Commit suas mudanças (git commit -m 'Melhoria no contraste do chat').

Push para a Branch (git push origin feature/MelhoriaVisual).

Abra um Pull Request.
