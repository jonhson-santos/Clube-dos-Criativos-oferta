import React, { useState, useEffect } from 'react';
import { Lock, FolderX, AlertTriangle, Clock, FileText, Eye, Download, X, CheckCircle, Shield } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(8 * 60); // 8 minutos em segundos
  const [typedText, setTypedText] = useState('');
  const fullText = 'ACESSO_PARCIAL_CONCEDIDO';

  useEffect(() => {
    setIsVisible(true);
    
    // Efeito de digitação no terminal
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);
    
    // Countdown timer
    const timerInterval = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
      clearInterval(typingInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const partialAccess = [
    {
      icon: <FileText className="w-5 h-5" />,
      item: "10 Criativos já editados",
      description: "(Reels, Shorts, TikTok)"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      item: "5 Copies com CTA agressivo",
      description: "prontos para usar"
    },
    {
      icon: <FolderX className="w-5 h-5" />,
      item: "Mini biblioteca oculta",
      description: "(sem atualizações semanais)"
    },
    {
      icon: <Download className="w-5 h-5" />,
      item: "Pasta bônus com criativos virais",
      description: "do seu nicho"
    }
  ];

  const downsellPlans = [
    {
      name: "PACOTE ESSENCIAL",
      originalPrice: "R$48",
      price: "R$27",
      description: "pequena pasta + 1 criativo bônus oculto",
      button: "QUERO ACESSO LIMITADO AGORA",
      accent: "border-yellow-600 bg-yellow-600 bg-opacity-10"
    },
    {
      name: "ACESSO SEMANAL LIGHT", 
      originalPrice: "R$17",
      price: "R$9,97",
      description: "recebe apenas a pasta da semana, sem extras",
      button: "QUERO ACESSO LIMITADO AGORA",
      accent: "border-red-600 bg-red-600 bg-opacity-10",
      popular: true
    },
    {
      name: "MINI-VITALÍCIO",
      originalPrice: "R$67",
      price: "R$47",
      description: "acesso à pasta fixa + 1 atualização futura",
      button: "QUERO ACESSO LIMITADO AGORA",
      accent: "border-green-600 bg-green-600 bg-opacity-10"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Dark metallic background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,0,0,0.05)_0%,transparent_70%)] animate-pulse"></div>
      
      {/* Blocked access pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(184,0,0,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      {/* Header Terminal - Partial Access */}
      <div className="relative z-10 border-b border-red-600 bg-black bg-opacity-95 p-3">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
            <span className="text-yellow-500 font-mono text-sm">root@vault:~$ {typedText}<span className="animate-pulse">|</span></span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 text-xs font-mono">ACESSO_LIMITADO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight font-bebas">
              <span className="text-red-600">Você recusou o acesso total.</span>
              <br />
              <span className="text-white">Mas... ainda pode levar uma parte.</span>
            </h1>
            
            <div className="bg-gray-900 bg-opacity-70 border-2 border-yellow-600 rounded-lg p-6 mb-8 max-w-3xl mx-auto relative">
              <div className="absolute -top-3 left-6 bg-black px-3 py-1 text-yellow-600 text-sm font-mono border border-yellow-600">
                ÚLTIMA_JANELA.zip
              </div>
              <p className="text-2xl md:text-3xl text-yellow-400 font-bold">
                Essa é sua última janela antes do cofre fechar pra sempre.
              </p>
            </div>
          </div>
        </div>

        {/* Main Copy */}
        <div className="mb-16">
          <div className="bg-gray-900 bg-opacity-50 border border-gray-600 rounded-lg p-10">
            <div className="text-center mb-8">
              <p className="text-2xl text-white font-bold mb-4">
                Você não quis o pacote completo.
              </p>
              <p className="text-2xl text-white font-bold mb-6">
                Tudo bem.
              </p>
              
              <div className="space-y-4 text-xl text-white mb-8">
                <p>Mas a verdade é que você viu o que ninguém viu.</p>
                <p className="text-red-400 font-bold">E agora não dá pra "desver".</p>
              </div>
              
              <p className="text-2xl text-yellow-400 font-bold">
                Então aqui está um acesso limitado, com um preço que nunca mais vai aparecer.
              </p>
            </div>
          </div>
        </div>

        {/* Partial Access Contents */}
        <div className="mb-16">
          <div className="bg-black bg-opacity-60 border-2 border-red-600 rounded-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <Lock className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-4xl font-bold text-white font-bebas">
                📂 ACESSO PARCIAL LIBERADO:
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {partialAccess.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 bg-opacity-50 border border-yellow-600 rounded-lg p-6 hover:bg-opacity-70 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-yellow-500 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white mb-1">{item.item}</p>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-red-900 bg-opacity-30 border border-red-500 rounded-lg p-6">
              <p className="text-xl text-white font-bold mb-2">
                Não é o cofre completo.
              </p>
              <p className="text-lg text-red-400 font-bold">
                Mas é o suficiente pra você começar a arrebentar antes de todo mundo.
              </p>
            </div>
          </div>
        </div>

        {/* Downsell Plans */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-white font-bebas">
            🟠 ESCOLHA SEU ACESSO LIMITADO:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {downsellPlans.map((plan, index) => (
              <div 
                key={index}
                className={`${plan.accent} border-2 rounded-lg p-8 relative transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MAIS ESCOLHIDO
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-white font-bebas">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl text-gray-500 line-through">{plan.originalPrice}</span>
                      <span className="text-sm text-red-400 font-bold">por</span>
                    </div>
                    <span className="text-4xl font-black text-yellow-400">{plan.price}</span>
                  </div>
                  <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                    ({plan.description})
                  </p>
                  <a 
                    href={
                      plan.price === "R$9,97" ? "https://app.pushinpay.com.br/service/pay/9F70A9AC-55F6-4DF3-9990-008BF40FBBD0" :
                      plan.price === "R$27" ? "https://app.pushinpay.com.br/service/pay/9F70AA3E-8419-49B0-9608-68323715CB23" :
                      "https://app.pushinpay.com.br/service/pay/9F70AB2D-906B-4650-BEF3-1924A6D27AE2"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-lg font-bold text-sm transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-red-700 hover:bg-red-800 text-white' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  } hover:scale-105 hover:shadow-lg border-2 border-current block text-center`}>
                    {plan.button}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Rejection Button */}
        <div className="text-center mb-16">
          <a 
            href="https://mente-blindada-21.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-400 text-lg underline transition-colors duration-300 font-medium"
          >
            NÃO QUERO NADA — PREFIRO CONTINUAR NA MULTIDÃO
          </a>
          <div className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            <p className="text-red-400 font-bold">
              ⚠️ Se sair agora, não tem volta.
            </p>
            <p className="mt-2">
              Essa oferta está escondida até mesmo dos seus concorrentes.
            </p>
          </div>
        </div>

        {/* Final Warning */}
        <div className="bg-black bg-opacity-80 border-2 border-red-600 rounded-lg p-10 text-center relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            ÚLTIMA_CHANCE
          </div>
          
          <div className="space-y-4 text-xl text-white font-bold mb-6">
            <p>⚫️ Se sair agora, não tem volta.</p>
            <p className="text-red-400">Essa oferta está escondida até mesmo dos seus concorrentes.</p>
          </div>
          
          <div className="flex items-center justify-center space-x-3 text-2xl font-black text-yellow-400">
            <Lock className="w-8 h-8" />
            <span>Acesso parcial. Preço único. Última chance.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;