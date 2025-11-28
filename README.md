# Ponto do Pescador - Landing Page

Landing page moderna e responsiva para o Ponto do Pescador em Paranavaí, PR.

## 🚀 Tecnologias

- React 18
- Vite
- CSS3 (com variáveis CSS para temas)

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Para build de produção:
```bash
npm run build
```

## 🎨 Funcionalidades

- **Header**: Navegação fixa com logo e menu responsivo
- **Sobre**: Seção com informações do local e galeria de imagens do Google Drive
- **Contato**: Cards com telefone e links para redes sociais (Instagram e YouTube)
- **Endereço**: Mapa interativo do Google Maps
- **Footer**: Informações de contato e links para redes sociais

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🖼️ Imagens do Google Drive

Para adicionar imagens do Google Drive, você precisa:

1. Compartilhar os arquivos do Google Drive como "Público" ou "Qualquer pessoa com o link"
2. Obter o ID do arquivo da URL do Google Drive
3. Adicionar os IDs no arquivo `src/components/Sobre.jsx` no array `imageIds`

Exemplo:
```javascript
const imageIds = [
  '1a2b3c4d5e6f7g8h9i0j',
  '2b3c4d5e6f7g8h9i0j1k',
  // ... mais IDs
]
```

## 📝 Personalização

- Cores: Edite as variáveis CSS em `src/index.css`
- Conteúdo: Edite os componentes em `src/components/`
- Estilos: Cada componente tem seu próprio arquivo CSS

## 🌐 Links

- Instagram: [@opontodopescadorparanavai](https://www.instagram.com/opontodopescadorparanavai/)
- YouTube: [@alexota8137](https://www.youtube.com/@alexota8137)

## 📄 Licença

Este projeto é privado e pertence ao Ponto do Pescador.

