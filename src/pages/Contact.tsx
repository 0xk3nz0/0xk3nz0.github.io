import { useEffect, useState } from 'react';

interface Notification {
  id: number;
  message: string;
  isExiting?: boolean;
}

const contactLinks = [
  {
    icon: 'ph-envelope-simple',
    title: 'e-mail',
    description: 'copy my email',
    action: 'copy',
    value: 'd4wan5564x@gmail.com',
    notification: 'Email copied to clipboard! 📧',
  },
  {
    href: 'https://www.linkedin.com/in/hamza-mouhib/',
    icon: 'ph-linkedin-logo',
    title: 'linkedin',
    description: 'view my profile',
  },
  {
    href: 'https://github.com/0xk3nz0',
    icon: 'ph-github-logo',
    title: 'github',
    description: 'browse my code',
  }
];

export default function Contact() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    window.document.title = "Contact Me";
  }, [])

  const showNotification = (message: string) => {
    const id = counter;
    setCounter(prev => prev + 1);
    setNotifications(prev => [...prev, { id, message, isExiting: false }]);
    setTimeout(() => hideNotification(id), 2500);
  };

  const hideNotification = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => notif.id === id ? { ...notif, isExiting: true } : notif)
    );
    setTimeout(() => {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    }, 400);
  };

  const handleCopy = async (value: string, notification: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // fallback method
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      showNotification(notification);
    } catch (err) {
      showNotification("Failed to copy");
      console.error("Copy failed:", err);
    }
  };

  return (
    <>
      <ul className="w-full max-w-4xl px-4">
        {contactLinks.map((link, index) => (
          <li key={index} className="mb-3 sm:mb-6">
            {link.action === 'copy' ? (
              <button onClick={() => handleCopy(link.value!, link.notification!)} className="w-full text-left">
                <div className="flex items-center gap-1 m-2 sm:m-5 cursor-pointer group">
                  <i className={`ph ${link.icon} text-strong mr-2 sm:mr-3 text-base sm:text-xl`}></i>
                  <p className="text-text-strong font-mono font-normal text-sm sm:text-base uppercase">{link.title}</p>
                  <span className="text-text-weak font-mono font-normal text-xs sm:text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 hidden sm:inline">
                    _ {link.description}
                  </span>
                </div>
              </button>
            ) : (
              <a href={link.href} target={link.href?.startsWith('http') ? '_blank' : undefined} rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <div className="flex items-center gap-1 m-2 sm:m-5 cursor-pointer group">
                  <i className={`ph ${link.icon} text-strong mr-2 sm:mr-3 text-base sm:text-xl`}></i>
                  <p className="text-text-strong font-mono font-normal text-sm sm:text-base uppercase">{link.title}</p>
                  <span className="text-text-weak font-mono font-normal text-xs sm:text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 hidden sm:inline">
                    _ {link.description}
                  </span>
                </div>
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 flex flex-col gap-4 max-w-[90vw] pointer-events-auto">
        {notifications.map((notif) => (
          <div key={notif.id} className={`bg-white dark:bg-[rgba(20,20,20,0.95)] border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] px-3 py-3 sm:px-5 sm:py-4 min-w-[250px] sm:min-w-[300px] backdrop-blur-[10px] text-black dark:text-white text-xs font-mono ${notif.isExiting ? 'animate-slide-out' : 'animate-slide-in'}`}>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm">{notif.message}</span>
              <button 
                onClick={() => hideNotification(notif.id)} 
                className="bg-transparent border-none text-[rgba(0,0,0,0.6)] dark:text-[rgba(255,255,255,0.6)] cursor-pointer text-lg ml-2 hover:text-black dark:hover:text-white"
                type="button"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(400px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(400px); opacity: 0; }
        }
        .animate-slide-in { animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-slide-out { animation: slideOut 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>
    </>
  );
}
