import { motion } from "motion/react";
import { CheckCircle2, MousePointerClick, Image as ImageIcon, Copy, PenTool, Download, ExternalLink, AlertTriangle } from "lucide-react";

const packs = [
  { id: 1, title: "Diversos", description: "Artes variadas para todas as ocasiões.", icon: "🎭", link: "https://canva.link/bylefiuxng3zloq" },
  { id: 2, title: "Floral e Botânico", description: "Estampas florais e elementos da natureza.", icon: "🌸", link: "https://canva.link/jvx5uqtgyssm9eb" },
  { id: 3, title: "Frases Motivacionais", description: "Frases inspiradoras e motivacionais.", icon: "⭐", link: "https://canva.link/tobzqbxz5luxpk6" },
  { id: 4, title: "Casamentos e Eventos", description: "Artes elegantes para datas especiais.", icon: "💍", link: "https://canva.link/png4tiqv0dg6r8v" },
  { id: 5, title: "Copa do Mundo 2026", description: "Artes temáticas para a Copa do Mundo.", icon: "🌍", link: "https://canva.link/a2ruo9v88konqi9" },
  { id: 6, title: "Gamer (Pack 1)", description: "Artes do universo gamer e geek.", icon: "🎮", link: "https://canva.link/hiapumig8bm6k53" },
  { id: 7, title: "Profissões", description: "Artes representativas de diversas carreiras.", icon: "💼", link: "https://canva.link/zllu88spge1l8h6" },
  { id: 8, title: "Diversos (Pack 2)", description: "Mais opções variadas de estampas.", icon: "🎭", link: "https://canva.link/1mxkzk2bx430hr6" },
  { id: 9, title: "Animes, Planetas, BTS...", description: "Cultura pop, K-pop e universo.", icon: "🎌", link: "https://canva.link/ewthtdnti3wrf97" },
  { id: 10, title: "Diversos (Pack 3)", description: "Ainda mais opções para o seu catálogo.", icon: "🎭", link: "https://canva.link/2f0u2zzkclbmnq3" },
  { id: 11, title: "Gamer (Pack 2)", description: "Expansão de artes do universo gamer.", icon: "🎮", link: "https://canva.link/t9zlbaaptq2pymo" },
  { id: 12, title: "Animais Meme", description: "Pets divertidos e memes da internet.", icon: "🐶", link: "https://canva.link/iu164g5aoa79y22" },
  { id: 13, title: "Guia de Impressão e Produção", description: "Instruções e dicas para imprimir e montar seus produtos.", icon: "🖨️", link: "https://drive.google.com/file/d/1n5x3BX8APwD84NWfsFog6nTJbpJ8QJ16/view?usp=sharing" },
];

const bonuses = [
  { id: 1, title: "Kit Gabaritos para Máquinas de Ímãs e Bottons", description: "Apresente seus bottons e ímãs de forma profissional nas redes sociais.", icon: "🖼️", link: "#" },
  { id: 2, title: "Planilha de Custos e Precificação", description: "Aprenda a calcular seus custos e definir o preço ideal de venda.", icon: "💰", link: "https://docs.google.com/spreadsheets/d/1rH7fEgoVg6xF5HEZhZn9kZ3AI6Ua05sc/edit?usp=sharing&ouid=117444708865396527734&rtpof=true&sd=true" },
  { id: 3, title: "Scripts para Fechar Vendas no WhatsApp", description: "10 modelos prontos para artesãos copiarem e colarem.", icon: "🚀", link: "https://drive.google.com/file/d/1GEdpm8uQdAJkPliZVdMl6mdS80KGXz6j/view?usp=sharing" },
];

const steps = [
  { icon: MousePointerClick, text: 'Clique em "Acessar Pack".' },
  { icon: ImageIcon, text: 'O Canva abrirá automaticamente.' },
  { icon: Copy, text: 'Faça uma cópia para sua conta.' },
  { icon: PenTool, text: 'Edite quando desejar.' },
  { icon: Download, text: 'Exporte em PNG para impressão.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-16 px-4 text-center border-b border-slate-100"
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span>Todos os links são permanentes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            <span className="mr-3">📦</span>
            +3.000 Artes Prontas para Bottons e Ímãs
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Bem-vindo(a)! Nesta página você encontra todos os packs disponíveis. Basta clicar em{" "}
            <span className="font-semibold text-slate-700">"Acessar Pack"</span> para abrir o
            arquivo correspondente no Canva.
          </p>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Packs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {packs.map((pack) => (
            <motion.div
              key={pack.id}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
            >
              <div className="text-4xl mb-4 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center shadow-inner">
                {pack.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{pack.title}</h3>
              <p className="text-sm text-slate-500 mb-8 flex-grow">{pack.description}</p>
              <a
                href={pack.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200 group"
              >
                <span>Acessar Pack</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bonus Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <span className="mr-3">🎁</span>
                Seus Bônus Exclusivos
              </h2>
              <p className="text-slate-500 mt-2">Materiais extras para impulsionar seus resultados</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((bonus) => (
              <motion.div
                key={bonus.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-4xl mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm border border-indigo-50">
                  {bonus.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{bonus.title}</h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow">{bonus.description}</p>
                <a
                  href={bonus.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={bonus.download ? true : undefined}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors duration-200 group"
                >
                  <span>{bonus.download ? "Baixar Bônus" : "Acessar Bônus"}</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Como Acessar Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-[#F0F5FF] rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Como acessar os arquivos</h2>
            <p className="text-slate-500">Siga estes passos simples para começar a editar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-4 relative z-10">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="text-blue-600 font-semibold mb-1">Passo {index + 1}</div>
                <p className="text-sm text-slate-600 font-medium">{step.text}</p>
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-full h-[2px] bg-blue-200/50 -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Important Notice */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white border border-amber-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-400"></div>
          <div className="flex items-center mb-6">
            <div className="bg-amber-100 p-3 rounded-full mr-4 text-amber-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Importante</h2>
          </div>
          <ul className="space-y-4 max-w-3xl ml-1">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-slate-600 font-medium">Não compartilhe os links. O sistema monitora acessos indevidos.</p>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-slate-600 font-medium">Os arquivos são destinados apenas ao comprador.</p>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-slate-600 font-medium">Faça uma cópia do arquivo no seu Canva antes de começar a editar.</p>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-slate-600 font-medium">Guarde esta página (adicione aos favoritos) para acessar quando precisar.</p>
            </li>
          </ul>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-16 border-t border-slate-100 mt-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">💙</div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Obrigado pela sua compra!</h3>
          <p className="text-slate-500 mb-6">
            Esperamos que este material ajude você a produzir bottons e ímãs incríveis.
          </p>
          <div className="inline-block bg-white border border-slate-200 rounded-xl px-6 py-3 shadow-sm">
            <p className="font-semibold text-blue-600">Desejamos muito sucesso nas suas vendas!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
