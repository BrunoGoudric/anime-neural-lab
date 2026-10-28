# 🧠 Anime Neural Lab

> Um laboratório prático para aprender redes neurais com **TensorFlow.js**, evoluindo de uma classificação numérica simples até o reconhecimento de personagens de anime em imagens.

## 📖 Sobre o projeto

O **Anime Neural Lab** é um projeto educacional desenvolvido com **Next.js**, **TypeScript** e **TensorFlow.js**. O objetivo é entender os fundamentos de redes neurais por meio de experimentos práticos, sem depender inicialmente de modelos pré-treinados.

Na primeira etapa, a aplicação treina uma pequena rede neural para classificar personagens **fictícios** como **Guerreiro** ou **Ninja**, com base em dois atributos numéricos: **força** e **velocidade** (valores de 0 a 1).

> **Importante:** os dados são sintéticos e servem apenas para aprendizado. A versão atual não identifica personagens reais de anime por imagem.

## ✨ Funcionalidades atuais

- Treinamento de uma rede neural diretamente no navegador.
- Classificação de duas categorias fictícias: Guerreiro e Ninja.
- Visualização do progresso por épocas, _loss_ e _accuracy_.
- Ajuste dos atributos de entrada com controles deslizantes e campos numéricos.
- Exibição das probabilidades previstas para cada classe.
- Possibilidade de repetir o treinamento e experimentar novas entradas.

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) — aplicação React com App Router.
- [React](https://react.dev/) — interface interativa.
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática.
- [TensorFlow.js](https://www.tensorflow.org/js) — criação, treinamento e execução do modelo no navegador.
- [Tailwind CSS](https://tailwindcss.com/) — estilização.

## 🧠 Arquitetura da primeira rede neural

```text
Entrada (2 atributos: força e velocidade)
             ↓
Camada Dense (8 neurônios, ativação ReLU)
             ↓
Camada Dense (2 neurônios, ativação Softmax)
             ↓
Probabilidades: Guerreiro / Ninja
```

| Configuração    | Valor                     |
| --------------- | ------------------------- |
| Entradas        | 2                         |
| Camada oculta   | 8 neurônios, ReLU         |
| Saída           | 2 neurônios, Softmax      |
| Otimizador      | Adam (`0.01`)             |
| Função de perda | `categoricalCrossentropy` |
| Métrica         | `accuracy`                |
| Épocas          | 150                       |
| Batch size      | 2                         |

A rede possui **42 parâmetros treináveis**: 24 na primeira camada (16 pesos + 8 biases) e 18 na segunda (16 pesos + 2 biases).

### Como o treinamento funciona

1. **Forward pass:** a rede calcula uma previsão a partir das entradas.
2. **Loss:** a previsão é comparada à classe esperada.
3. **Backpropagation:** são calculados os gradientes do erro em relação aos parâmetros.
4. **Otimização:** o Adam atualiza os pesos e biases.
5. **Repetição:** o processo continua ao longo das épocas de treinamento.

O conjunto inicial contém apenas **10 exemplos sintéticos**. Por isso, uma alta acurácia de treinamento **não comprova generalização** para novos dados.

## 🚀 Executando localmente

### Pré-requisitos

- Node.js em uma versão compatível com o Next.js instalado no projeto.
- npm.

### Instalação

```bash
git clone https://github.com/SEU-USUARIO/anime-neural-lab.git
cd anime-neural-lab
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

> Substitua `SEU-USUARIO` pelo seu usuário do GitHub após publicar o repositório.

### Como testar

1. Clique em **Treinar rede neural** e acompanhe o avanço das épocas.
2. Observe os valores de _loss_ e _accuracy_.
3. Ajuste **Força** e **Velocidade** usando os sliders ou inputs numéricos.
4. Clique em **Classificar personagem** para visualizar as probabilidades.
5. Teste diferentes combinações, inclusive valores que não aparecem no dataset.

Exemplos de entradas:

| Força | Velocidade | Classe esperada no experimento |
| ----: | ---------: | ------------------------------ |
|  0.90 |       0.20 | Guerreiro                      |
|  0.20 |       0.90 | Ninja                          |
|  0.80 |       0.30 | Guerreiro                      |
|  0.30 |       0.80 | Ninja                          |
|  0.50 |       0.50 | Indefinida / caso exploratório |

Os resultados reais podem variar entre treinamentos devido à inicialização aleatória dos pesos.

## 📁 Estrutura do projeto

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── lib/
    └── neural/
        ├── dataset.ts
        └── model.ts
```

A estrutura acima representa a organização inicial proposta e pode evoluir com novas etapas.

## 🗺️ Roadmap

- [x] Criar o projeto com Next.js, TypeScript e TensorFlow.js.
- [x] Definir um dataset numérico sintético.
- [x] Construir uma rede neural com camadas Dense.
- [x] Implementar treinamento e inferência no navegador.
- [x] Exibir métricas de treinamento e controles de entrada.
- [ ] Criar gráficos de evolução de _loss_ e _accuracy_.
- [ ] Separar dados de treinamento, validação e teste.
- [ ] Visualizar a fronteira de decisão da rede.
- [ ] Explorar _overfitting_ e ajustes de hiperparâmetros.
- [ ] Trabalhar com tensores de imagens e redes convolucionais (CNNs).
- [ ] Preparar um dataset de personagens de anime com uso autorizado.
- [ ] Integrar MobileNet com _transfer learning_.
- [ ] Implementar upload de imagem e classificação visual.
- [ ] Adicionar tratamento para imagens fora das classes conhecidas.
- [ ] Salvar e carregar modelos treinados.

## 🎯 Objetivos de aprendizado

Este projeto busca consolidar conceitos como:

- Tensores e representação numérica de dados.
- Pesos, biases e funções de ativação.
- Arquitetura de redes neurais.
- _Forward pass_ e _backpropagation_.
- Funções de perda e otimizadores.
- Épocas, lotes e métricas de treinamento.
- Generalização, validação e _overfitting_.
- Classificação de imagens e _transfer learning_.

## 📚 Referências

- [TensorFlow.js — documentação oficial](https://www.tensorflow.org/js)
- [TensorFlow.js — modelos e treinamento](https://www.tensorflow.org/js/guide/train_models)
- [Next.js — documentação oficial](https://nextjs.org/docs)
- [React — documentação oficial](https://react.dev/)

## 📄 Licença

Ainda não foi definida uma licença para este repositório. Caso deseje permitir reutilização sob termos explícitos, adicione um arquivo `LICENSE` apropriado.

---

**Status:** projeto educacional em desenvolvimento. A identificação de personagens de anime por imagem faz parte das próximas etapas.
