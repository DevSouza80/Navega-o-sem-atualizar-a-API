# 🚀 Navegação sem Recarregar a Página (AJAX + jQuery)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

Projeto de estudo que demonstra como implementar uma **navegação dinâmica entre páginas sem recarregar o navegador**, utilizando **jQuery** e requisições **AJAX**. Ao clicar em um item do menu, o conteúdo da página correspondente é carregado de forma assíncrona e exibido com efeito de *fade* dentro da página atual.

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Como executar](#-como-executar)
- [Como funciona](#-como-funciona)
- [Possíveis melhorias](#-possíveis-melhorias)
- [Autor](#-autor)

---

## 📖 Sobre o projeto

Em sites tradicionais, cada clique em um link recarrega a página inteira. Este projeto mostra uma abordagem diferente: o clique no menu é **interceptado via JavaScript**, o conteúdo da página de destino é buscado com `$.ajax()` e inserido dinamicamente em um container, sem refresh e sem perder o estado da página principal.

É uma base simples e didática para entender os conceitos por trás de **SPAs (Single Page Applications)**.

## ✨ Funcionalidades

- Navegação entre páginas **sem recarregar** o navegador
- Carregamento assíncrono de conteúdo com **AJAX (jQuery)**
- Efeito de transição suave com `fadeIn()`
- Tratamento de erro para páginas não encontradas (`404`)
- Callback `beforeSend` para execução de ações antes da requisição
- Menu de navegação responsivo e centralizado com **Flexbox**

## 🛠 Tecnologias utilizadas

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização e layout do menu (Flexbox) |
| **JavaScript** | Lógica de navegação |
| **jQuery 4.0.0** | Manipulação do DOM, eventos e requisições AJAX |

## 📁 Estrutura de pastas

```
📦 projeto
 ┣ 📂 jquery
 ┃ ┗ 📜 jquery-4.0.0.min.js
 ┣ 📂 src
 ┃ ┣ 📂 css
 ┃ ┃ ┗ 📜 style.css
 ┃ ┗ 📂 js
 ┃   ┗ 📜 script.js
 ┣ 📜 index.html
 ┣ 📜 home.html
 ┣ 📜 contato.html
 ┣ 📜 sobre.html
 ┗ 📜 teste.html
```

## ▶️ Como executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   ```

2. **Acesse a pasta do projeto**

   ```bash
   cd NOME-DO-REPOSITORIO
   ```

3. **Inicie um servidor local**

   > ⚠️ Requisições AJAX **não funcionam** ao abrir o arquivo diretamente (`file://`) por causa da política de segurança dos navegadores. É necessário servir o projeto por HTTP.

   Escolha uma das opções:

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx serve

   # VS Code: extensão "Live Server" → botão direito em index.html → Open with Live Server
   ```

4. **Abra no navegador**

   ```
   http://localhost:8000
   ```

## ⚙️ Como funciona

O fluxo da navegação é dividido em três etapas:

**1. Interceptação do clique**

```js
$('a').click(function(){
    var href = $(this).attr('href');
    // ...
    return false; // impede o carregamento padrão do link
});
```

**2. Requisição assíncrona**

O `href` do link é usado como URL da requisição `$.ajax()`, que busca o conteúdo da página de destino em segundo plano.

**3. Inserção no DOM**

Em caso de sucesso, o conteúdo retornado é adicionado ao `#container` com efeito de fade. Em caso de erro `Not Found`, uma mensagem é registrada no console.

```js
'success': function(data) {
    $(data).appendTo('#container').fadeIn();
}
```

> Os arquivos de conteúdo (`home.html`, `contato.html`, `sobre.html`) contêm apenas um fragmento HTML com `display: none`, que é revelado pelo `fadeIn()` após ser inserido na página.

## 🔮 Possíveis melhorias

- [ ] Limpar o `#container` antes de inserir novo conteúdo (atualmente o conteúdo é acumulado a cada clique)
- [ ] Usar a **History API** (`pushState`) para atualizar a URL e permitir os botões voltar/avançar do navegador
- [ ] Exibir uma mensagem de erro amigável na tela para páginas não encontradas
- [ ] Adicionar indicador de carregamento (*loader*) usando o `beforeSend`
- [ ] Destacar o item ativo do menu
- [ ] Utilizar delegação de eventos (`$(document).on('click', 'a', ...)`) para links criados dinamicamente
- [ ] Migrar para a **Fetch API** e JavaScript puro (sem dependência do jQuery)

## 👤 Autor

Desenvolvido por **SEU NOME**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SEU-USUARIO)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/SEU-PERFIL)

---

⭐ Se este projeto te ajudou de alguma forma, considere deixar uma estrela no repositório!
