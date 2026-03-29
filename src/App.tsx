import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, Film, Zap, ArrowRight, Mail, Phone, Instagram, Twitter, X, MessageSquare, Camera, Palette, Video } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-5 dark-glass border-b border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0">
      {/* Top Row on Mobile: Logo + Inquiry Button */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-sm md:text-base lg:text-lg font-sans tracking-widest font-bold leading-tight text-white">棠哲攝影</span>
            <span className="text-[8px] md:text-[10px] lg:text-xs font-sans tracking-widest font-normal opacity-60 leading-tight text-white/80">｜AI 視覺藝術與商業攝影</span>
          </div>
          <span className="text-[5px] md:text-[7px] tracking-[0.2em] font-sans font-medium opacity-40 uppercase text-white/50">TongZhe Photographer AI Visual</span>
        </div>

        {/* Mobile Inquiry Button - Visible only on mobile */}
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="md:hidden px-3 py-1.5 rounded-full border border-white/20 text-[8px] tracking-widest hover:bg-[#8c7851] hover:text-white transition-all duration-300 shadow-lg"
        >
          <span className="font-bold">立即諮詢</span>
        </button>
      </div>

      {/* Mobile Links - Visible only on mobile, placed below brand */}
      <div className="flex md:hidden gap-4 mt-1 items-center">
        <button 
          onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })} 
          className="text-[7px] tracking-[0.15em] text-white/30 uppercase hover:text-[#8c7851] transition-colors"
        >
          作品 Showcase
        </button>
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
          className="text-[7px] tracking-[0.15em] text-white/30 uppercase hover:text-[#8c7851] transition-colors"
        >
          服務 Services
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
          className="text-[7px] tracking-[0.15em] text-white/30 uppercase hover:text-[#8c7851] transition-colors"
        >
          聯絡 Contact
        </button>
      </div>

      {/* Desktop Links & Inquiry Button Section */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex gap-8 text-sm tracking-widest font-medium text-white/70">
          <button onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-xs whitespace-nowrap">作品展示 <span className="text-[9px] opacity-50 ml-1">Showcase</span></button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-xs whitespace-nowrap">專業服務 <span className="text-[9px] opacity-50 ml-1">Services</span></button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-xs whitespace-nowrap">聯絡我們 <span className="text-[9px] opacity-50 ml-1">Contact</span></button>
        </div>
        
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-5 py-2.5 rounded-full border border-white/20 text-[10px] md:text-xs tracking-widest hover:bg-[#8c7851] hover:text-white hover:border-[#8c7851] transition-all duration-300 relative overflow-hidden group shadow-lg"
        >
          <span className="relative z-10 font-bold">立即諮詢 <span className="hidden sm:inline text-[9px] ml-1 font-medium opacity-70">Inquiry</span></span>
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-[100svh] flex items-center justify-center overflow-hidden pt-16">
    <div className="absolute inset-0 z-0">
      <motion.img 
        src="https://drive.google.com/thumbnail?id=1iDbKOlH5yaXqUfZ_rTIYu7Wa5dUwshWc&sz=w1920" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="w-full h-full object-cover scale-105"
        alt="Hero Background"
        referrerPolicy="no-referrer"
      />
      {/* Refined Dark Overlay (Black Fog) - Fades in after 1s */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute inset-0 bg-black/30 z-10" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 z-20" 
      />
    </div>
    
    <div className="relative z-30 text-center px-4 w-full max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-3 py-1 rounded-full border border-white/40 bg-black/40 backdrop-blur-md text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-6 text-white font-semibold">
          視覺敘事的未來 <span className="hidden sm:inline ml-2">The Future of Visual Storytelling</span>
        </span>
        <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-serif italic mb-4 leading-tight tracking-[0.15em] text-white font-bold drop-shadow-2xl">
          超越現實 探索未知
          <div className="text-[7px] sm:text-[9px] md:text-[10px] lg:text-xs mt-3 opacity-100 font-sans not-italic tracking-[0.5em] uppercase text-white font-medium">BEYOND REALITY, INTO THE UNSEEN</div>
        </h1>
        <div className="text-xs sm:text-base md:text-lg lg:text-xl mb-8 font-sans not-italic tracking-[0.2em] text-white/90 font-medium drop-shadow-lg">
          AI 視覺藝術與商業攝影：為品牌提供超現實視覺方案
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button 
            onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#5d534a] rounded-full font-bold transition-all hover:bg-[#fdfbf7] hover:text-[#8c7851] active:scale-95 shadow-xl border border-white/10 text-xs"
          >
            觀看作品集 <span className="text-[10px] opacity-60">Showreel</span> <Play size={14} fill="currentColor" />
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/40 bg-white/5 backdrop-blur-md hover:bg-[#8c7851] hover:text-white hover:border-[#8c7851] transition-all duration-300 text-xs text-white font-bold shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10">專業服務 <span className="text-[10px] opacity-80 ml-1">Services</span></span>
          </button>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70 hidden md:block">
      <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto" />
    </div>
  </section>
);

interface VideoCardProps {
  title: string;
  category: string;
  videoUrl: string;
  posterUrl: string;
  enTitle: string;
  onClick: () => void;
}

const safeEncodeUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http')) {
    // Handle YouTube Links
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let videoId = '';
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split(/[?#]/)[0];
      } else if (url.includes('v=')) {
        videoId = url.split('v=')[1].split(/[?#]/)[0];
      } else if (url.includes('embed/')) {
        videoId = url.split('embed/')[1].split(/[?#]/)[0];
      }
      
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      }
    }

    // Convert Google Drive links to a more reliable format
    if (url.includes('drive.google.com')) {
      let id = '';
      const idMatch = url.match(/id=([^&]+)/);
      const fileMatch = url.match(/\/file\/d\/([^/]+)/);
      
      if (idMatch) id = idMatch[1];
      else if (fileMatch) id = fileMatch[1];

      if (id) {
        // If it's a thumbnail request (contains thumbnail in URL)
        if (url.includes('thumbnail')) {
          return `https://lh3.googleusercontent.com/d/${id}=w1000`;
        }
        // Use the most direct streaming URL possible
        return `https://drive.google.com/uc?id=${id}&export=media`;
      }
    }
    return url;
  }
  return url.split('/').map(segment => encodeURIComponent(segment)).join('/').replace(/%2F/g, '/');
};

const VideoCard: React.FC<VideoCardProps> = ({ title, category, videoUrl, posterUrl, enTitle, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');

  const handleMouseEnter = () => {
    if (isYouTube) return; // YouTube doesn't support direct <video> tag playback
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (isYouTube) return;
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onContextMenu={(e) => e.preventDefault()}
      className="group relative aspect-[3/4] sm:aspect-square rounded-xl md:rounded-2xl overflow-hidden dark-glass cursor-pointer border border-white/10 select-none shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300"
    >
      {/* Transparent Overlay to prevent direct interaction */}
      <div className="absolute inset-0 z-20" />
      
      {/* Primary Thumbnail - Much more reliable than video poster on iOS */}
      <img 
        src={safeEncodeUrl(posterUrl)} 
        alt={title}
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered && videoLoaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Video Preview - Only active on hover (desktop) and if not YouTube */}
      {!isYouTube && (
        <motion.video 
          ref={videoRef}
          src={safeEncodeUrl(videoUrl)} 
          muted
          playsInline
          loop
          preload="none"
          onLoadedData={() => setVideoLoaded(true)}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered && videoLoaded ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
        />
      )}
      
      {/* Refined Bottom Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 z-30 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
      >
        <div className="mb-auto flex justify-center items-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Play size={16} className="md:w-5 md:h-5" fill="white" />
          </div>
        </div>
        
        <div className="flex flex-col gap-0.5 drop-shadow-lg">
          <span className="text-[6px] md:text-[8px] uppercase tracking-[0.25em] text-[#8c7851] font-sans font-medium">{category}</span>
          <h3 className="text-[10px] md:text-base lg:text-lg font-serif italic text-[#fdfbf7] leading-tight tracking-wider line-clamp-1 font-bold">{title}</h3>
          <p className="text-[5px] md:text-[7px] text-zinc-500 uppercase tracking-[0.2em] font-sans line-clamp-1">{enTitle}</p>
        </div>
        
        <div className="mt-2 md:mt-3 flex items-center gap-1.5 text-[7px] md:text-[10px] font-medium text-white group-hover:text-white transition-colors drop-shadow-md">
          觀看作品 <ArrowRight size={8} className="md:w-3.5 md:h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const VideoModal = ({ isOpen, onClose, videoUrl, title }: { isOpen: boolean; onClose: () => void; videoUrl: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const embedUrl = React.useMemo(() => {
    if (!videoUrl) return '';
    
    // Handle YouTube
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      let videoId = '';
      if (videoUrl.includes('youtu.be/')) {
        videoId = videoUrl.split('youtu.be/')[1].split(/[?#]/)[0];
      } else if (videoUrl.includes('v=')) {
        videoId = videoUrl.split('v=')[1].split(/[?#]/)[0];
      } else if (videoUrl.includes('embed/')) {
        videoId = videoUrl.split('embed/')[1].split(/[?#]/)[0];
      }
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    }

    // Handle Google Drive
    const idMatch = videoUrl.match(/id=([^&]+)/);
    const fileMatch = videoUrl.match(/\/file\/d\/([^/]+)/);
    const driveId = idMatch ? idMatch[1] : (fileMatch ? fileMatch[1] : '');
    return driveId ? `https://drive.google.com/file/d/${driveId}/preview` : videoUrl;
  }, [videoUrl]);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Fallback timer to clear loading if iframe load event doesn't fire
      const timer = setTimeout(() => setIsLoading(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4"
          onContextMenu={(e) => e.preventDefault()}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl overflow-hidden rounded-xl md:rounded-3xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full bg-black">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black">
                  <div className="w-12 h-12 border-4 border-[#8c7851]/20 border-t-[#8c7851] rounded-full animate-spin mb-4" />
                  <p className="text-zinc-500 text-xs tracking-widest animate-pulse">載入作品中 Loading...</p>
                </div>
              )}
              
              <iframe
                src={embedUrl}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
                // @ts-ignore
                webkitallowfullscreen="true"
                // @ts-ignore
                mozallowfullscreen="true"
                title={title}
              />
              
              {/* 
                安全遮罩層 (Security Overlays) 
                1. 頂部遮罩：防止點擊 Google Drive 播放器右上角的「彈出視窗」按鈕（該按鈕會導向下載頁面）
                2. 底部遮罩：防止點擊右下角的 Google 圖示
              */}
              <div className="absolute top-0 right-0 w-24 h-16 z-20 cursor-default" />
              
              {/* 裝飾性漸層 - 僅用於美化標題顯示 */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />
            </div>

            {/* 控制項與標題 */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-start z-30 pointer-events-none">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="px-3 py-1 rounded-full dark-glass text-white/90 text-[8px] md:text-xs font-sans tracking-[0.2em] uppercase pointer-events-auto">
                  Portfolio Showcase
                </div>
                <h3 className="text-lg md:text-3xl font-serif italic text-white mt-2 tracking-wide drop-shadow-2xl">
                  {title}
                </h3>
              </motion.div>

              <div className="flex gap-2 pointer-events-auto">
                <button 
                  onClick={onClose}
                  className="p-2 md:p-4 rounded-full dark-glass text-white hover:bg-white hover:text-black transition-all duration-500 shadow-xl group"
                  aria-label="Close modal"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Showcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string, poster: string, title: string } | null>(null);

  const portfolioItems = [
    { 
      title: "DIOR：極致奢華保養", 
      enTitle: "DIOR: Ultimate Luxury Skincare",
      category: "美妝保養 / Beauty", 
      image: "https://drive.google.com/thumbnail?id=1sYWPSjs-iU5nHxWjXf-UCe19d7JrUSnr&sz=w1000",
      video: "https://drive.google.com/uc?id=1ouGVLN3gzde5W1MUWo00mVRSx8vM3r4V"
    },
    { 
      title: "幻夢之境：日劇片頭", 
      enTitle: "The Ethereal Realm: Opening",
      category: "AI 概念 / AI Concept", 
      image: "https://drive.google.com/thumbnail?id=1W3iOgjEXzDMd2mZIqHZ5r-0K53uW7Gfe&sz=w1000",
      video: "https://drive.google.com/uc?id=1W3iOgjEXzDMd2mZIqHZ5r-0K53uW7Gfe"
    },
    { 
      title: "日系化妝品：極致美學", 
      enTitle: "Japanese Beauty: Aesthetics",
      category: "美妝保養 / Beauty", 
      image: "https://drive.google.com/thumbnail?id=1711CFfhl0MrFWWnVCb_0oyauQHKFcjX0&sz=w1000",
      video: "https://drive.google.com/uc?id=1711CFfhl0MrFWWnVCb_0oyauQHKFcjX0"
    },
    { 
      title: "QBH 玻尿酸：自然植萃", 
      enTitle: "QBH Hyaluronic: Nature",
      category: "美妝保養 / Beauty", 
      image: "https://drive.google.com/thumbnail?id=1c9ltT58DpmDS7DOpJJR-8aycCHQ4hELS&sz=w1000",
      video: "https://drive.google.com/uc?id=17f1VYUSaRGnn7SunBqqvlG4ovfRomdBs"
    },
    { 
      title: "港區之巔：都會美學", 
      enTitle: "Minato Heights: Urban Aesthetics",
      category: "建築攝影 / Architecture", 
      image: "https://drive.google.com/thumbnail?id=1B0k2pKjAdylCmZiMkAE4Pdgx_olNWdMQ&sz=w1000",
      video: "https://drive.google.com/uc?id=1B0k2pKjAdylCmZiMkAE4Pdgx_olNWdMQ"
    },
    { 
      title: "QBH：柔順護髮", 
      enTitle: "QBH: Haircare",
      category: "美妝保養 / Beauty", 
      image: "https://drive.google.com/thumbnail?id=177nUDi2QG4ExK13mk3SzkZm1QuV4dpHm&sz=w1000",
      video: "https://drive.google.com/uc?id=1s1Xm_cCDmFNi_FypX9-S7-didtqTzdgx"
    },
    { 
      title: "高級機械表：萬年曆", 
      enTitle: "Luxury Watch: Perpetual Calendar",
      category: "精品工藝 / Luxury", 
      image: "https://drive.google.com/thumbnail?id=1pGKm0uhRSPEtL_65fDDcM8o1oqid_N3P&sz=w1000",
      video: "https://drive.google.com/uc?id=1pGKm0uhRSPEtL_65fDDcM8o1oqid_N3P"
    },
    { 
      title: "性能覺醒：經典紀元", 
      enTitle: "Performance: Classic Era",
      category: "汽車工業 / Automotive", 
      image: "https://drive.google.com/thumbnail?id=1SyYLkfcYIzlwq4TBDBneQHSM2ips0Gbl&sz=w1000",
      video: "https://drive.google.com/uc?id=1SyYLkfcYIzlwq4TBDBneQHSM2ips0Gbl"
    },
    { 
      title: "美之本源：前導概念", 
      enTitle: "The Essence of Beauty: Concept Teaser",
      category: "美妝保養 / Beauty", 
      image: "https://drive.google.com/thumbnail?id=1FeGXuflko23wMpX7vG6W7fxQ_6E5u316&sz=w1000",
      video: "https://drive.google.com/uc?id=1FeGXuflko23wMpX7vG6W7fxQ_6E5u316"
    },
    { 
      title: "移動美學：極速意志", 
      enTitle: "Mobility Aesthetics: Velocity Spirit",
      category: "汽車工業 / Automotive", 
      image: "https://drive.google.com/thumbnail?id=1GwRIKBmU_Q9DCkBxU9LqQe4Jcsr1UnU8&sz=w1000",
      video: "https://drive.google.com/uc?id=1GwRIKBmU_Q9DCkBxU9LqQe4Jcsr1UnU8"
    },
    { 
      title: "移動美學：永恆律動", 
      enTitle: "Mobility Aesthetics: Eternal Rhythm",
      category: "汽車工業 / Automotive", 
      image: "https://drive.google.com/thumbnail?id=1GEJ3KSNxNOy74EuCYJwKMIvFC8RbZ2r8&sz=w1000",
      video: "https://drive.google.com/uc?id=1GEJ3KSNxNOy74EuCYJwKMIvFC8RbZ2r8"
    },
    { 
      title: "性能覺醒：極速橫影", 
      enTitle: "Performance: Velocity Horizon",
      category: "汽車工業 / Automotive", 
      image: "https://drive.google.com/thumbnail?id=1NsvJ0xlaYCQ_1hwY1qa_I_MW8MIf31B-&sz=w1000",
      video: "https://drive.google.com/uc?id=1NsvJ0xlaYCQ_1hwY1qa_I_MW8MIf31B-"
    },
    { 
      title: "寶詩特：柔韌美學", 
      enTitle: "Postel: Resilient Beauty",
      category: "美妝保養 / Beauty", 
      image: "https://drive.google.com/thumbnail?id=1PXmTHDlpGXaZ5qnZVh06QyUeNuRX1x4l&sz=w1000",
      video: "https://drive.google.com/uc?id=1PXmTHDlpGXaZ5qnZVh06QyUeNuRX1x4l"
    },
    { 
      title: "QBH：絲滑護髮", 
      enTitle: "QBH: Silken Haircare",
      category: "美妝保養 / Beauty", 
      image: "https://drive.google.com/thumbnail?id=1GB1-7so8LKbi8vP3eNsrFtJ_sPQPFgkd&sz=w1000",
      video: "https://drive.google.com/uc?id=1GB1-7so8LKbi8vP3eNsrFtJ_sPQPFgkd"
    },
    { 
      title: "日系化妝品：絲滑光影", 
      enTitle: "Japanese Beauty: Silken Radiance",
      category: "美妝保養 / Beauty", 
      image: "https://drive.google.com/thumbnail?id=1R774AgqnYcW73XUHrbcT-XX4amEPM7Y4&sz=w1000",
      video: "https://drive.google.com/uc?id=1R774AgqnYcW73XUHrbcT-XX4amEPM7Y4"
    },
    { 
      title: "港區之巔：Ark Hills", 
      enTitle: "Minato Heights: Ark Hills",
      category: "建築攝影 / Architecture", 
      image: "https://drive.google.com/thumbnail?id=1xbUuuW-CrzOhJYlePfsfql-b2vLIypRd&sz=w1000",
      video: "https://drive.google.com/uc?id=1xbUuuW-CrzOhJYlePfsfql-b2vLIypRd"
    }
  ];

  return (
    <section id="showcase" className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto bg-[#121212]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-8"
      >
        <div className="max-w-xl">
          <h2 className="text-lg md:text-3xl font-serif italic leading-tight tracking-[0.2em] text-[#fdfbf7]">極致細節</h2>
          <div className="text-[8px] md:text-[9px] tracking-[0.5em] text-[#8c7851] uppercase font-sans mt-1.5 mb-4">Exquisite Details</div>
          <p className="text-[9px] md:text-xs text-zinc-400 leading-relaxed tracking-wide">
            每一幀畫面都經過頂尖 AI 模型精心生成，<br />
            並由專業藝術家細膩調校，確保細節超越感官認知。
          </p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
        {portfolioItems.map((item, index) => (
          <VideoCard 
            key={index}
            title={item.title}
            enTitle={item.enTitle}
            category={item.category}
            videoUrl={item.video}
            posterUrl={item.image}
            onClick={() => setSelectedVideo({ url: item.video, poster: item.image, title: item.title })}
          />
        ))}
      </div>

      <VideoModal 
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
      />
    </section>
  );
};

const Services = () => (
  <section id="services" className="py-16 md:py-32 bg-[#121212] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-lg md:text-3xl font-serif italic leading-tight tracking-[0.2em] text-[#fdfbf7]">專業整合服務</h2>
        <div className="text-[8px] md:text-[9px] tracking-[0.5em] text-[#8c7851] uppercase font-sans mt-1.5 mb-4">Our Capabilities</div>
        <p className="text-[9px] md:text-xs text-zinc-400 max-w-2xl mx-auto tracking-wide">
          我們連結想像與製作，<br />
          提供全方位的 AI 影像與品牌視覺解決方案。
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
        {[
          {
            icon: <MessageSquare className="text-white/90" />,
            color: "bg-[#8C6A5D]", // Muted Clay
            title: "顧問美學指導",
            enTitle: "Aesthetic Consulting",
            desc: "提供最適畫面構圖、精準秒數建議與跨平台適配方案，以專業美學引導影音製作。"
          },
          {
            icon: <Sparkles className="text-white/90" />,
            color: "bg-[#6B705C]", // Sage Green
            title: "AI 概念藝術",
            enTitle: "AI Concept Art",
            desc: "在製作開始前，透過高細節的 AI 渲染圖將世界觀與角色視覺化。"
          },
          {
            icon: <Film className="text-white/90" />,
            color: "bg-[#A58E6F]", // Warm Sand
            title: "電影級影像製作",
            enTitle: "Cinematic Production",
            desc: "為廣告、音樂錄影帶及短片提供全方位的 AI 影片生成服務。"
          },
          {
            icon: <Camera className="text-white/90" />,
            color: "bg-[#586F7C]", // Slate Blue
            title: "商業攝影",
            enTitle: "Commercial Photography",
            desc: "精準捕捉產品細節與品牌氣韻，透過光影語彙轉化為具備商業深度的視覺敘事。"
          },
          {
            icon: <Palette className="text-white/90" />,
            color: "bg-[#4A5D4E]", // Forest Green
            title: "視覺設計",
            enTitle: "Visual Design",
            desc: "將抽象理念具象化，建構具備高度識別的視覺系統，塑造品牌獨特的形象價值。"
          },
          {
            icon: <Video className="text-white/90" />,
            color: "bg-[#5D4E46]", // Deep Bark
            title: "影音製作",
            enTitle: "Video Production",
            desc: "整合動態影像與敘事邏輯，打造高效溝通的品牌影片，縮短受眾與產品的認知距離。"
          }
        ].map((service, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex md:block items-start gap-4 p-4 md:p-8 rounded-2xl dark-glass border border-white/5 hover:border-white/20 shadow-2xl transition-all duration-300 group"
          >
            <div className={`flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-xl ${service.color} text-white flex items-center justify-center mb-0 md:mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/5`}>
              {React.cloneElement(service.icon as React.ReactElement, { size: 16, className: "md:w-6 md:h-6" })}
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-serif italic mb-0.5 md:mb-1 tracking-wide text-[#fdfbf7] font-bold">{service.title}</h3>
              <p className="text-[7px] md:text-[10px] text-[#8c7851] uppercase tracking-widest mb-1 md:mb-4 font-semibold">{service.enTitle}</p>
              <p className="text-zinc-400 text-[10px] md:text-sm leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = encodeURIComponent("棠哲攝影｜AI 視覺藝術與商業攝影 - 諮詢郵件");
    const body = encodeURIComponent(`姓名: ${name}\n電子郵件: ${email}\n\n需求內容:\n${message}`);
    
    // Open default mail client
    window.location.href = `mailto:tongzhe@gmail.com?cc=tongzhe@hotmail.com&subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-[#121212] relative overflow-hidden">
      {/* Subtle Taipingshan-inspired organic glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8c7851]/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-10">
        <div>
          <h2 className="font-serif italic mb-6 md:mb-8 tracking-wider">
            <span className="text-lg md:text-3xl block leading-tight tracking-[0.15em] text-[#fdfbf7]">讓我們共同實現夢幻視野</span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.6em] text-[#8c7851] block mt-2">Realize Your Dream Vision</span>
          </h2>
          <p className="text-[10px] md:text-sm text-zinc-400 mb-10 md:mb-14 leading-relaxed tracking-wide">
            準備好提升您的視覺形象了嗎？<br />
            聯絡我們，了解 AI 如何為您的下一個項目帶來變革。
          </p>
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 md:gap-4 text-zinc-300 text-xs md:text-base">
                <Mail size={16} className="md:w-5 md:h-5 text-[#8c7851]" />
                <span>tongzhe@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-zinc-300 text-xs md:text-base">
                <Mail size={16} className="md:w-5 md:h-5 text-[#8c7851]" />
                <span>tongzhe@hotmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-zinc-300 text-xs md:text-base">
              <Phone size={16} className="md:w-5 md:h-5 text-[#8c7851]" />
              <span>+886-987023818</span>
            </div>
            <div className="pt-2">
              <a 
                href="https://line.me/ti/p/~tongzhe" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#06C755] to-[#05b34c] hover:from-[#05b34c] hover:to-[#049d43] text-white rounded-full text-sm md:text-base font-bold transition-all duration-300 active:scale-95 shadow-[0_10px_20px_rgba(6,199,85,0.3)] hover:shadow-[0_15px_30px_rgba(6,199,85,0.4)] group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-12">
                  <path d="M24 10.304c0-5.232-5.383-9.486-12-9.486s-12 4.254-12 9.486c0 4.69 4.27 8.613 10.046 9.348.392.085.923.258 1.058.592.121.301.079.77.039 1.073l-.171 1.027c-.052.308-.252 1.207 1.083.66 1.335-.546 7.203-4.243 9.829-7.261 1.861-2.096 2.116-3.52 2.116-5.441z"/>
                  <path fill="white" d="M8.48 12.2h-1.35V8.21h.45v3.54h.9v.45zm2.25 0h-.45V8.21h.45v3.99zm2.7 0h-.45l-1.35-1.99v1.99h-.45V8.21h.45l1.35 1.99V8.21h.45v3.99zm2.7 0h-1.35V8.21h1.35v.45h-.9v1.35h.9v.45h-.9v1.29h.9v.45z" />
                </svg>
                <span className="tracking-wider">LINE 立即諮詢</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative p-6 md:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="姓名 Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-xs md:text-base text-white focus:outline-none focus:border-[#8c7851] transition-all placeholder:text-zinc-500"
                  />
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="電子郵件 Email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-xs md:text-base text-white focus:outline-none focus:border-[#8c7851] transition-all placeholder:text-zinc-500"
                  />
                </div>
                <textarea 
                  required
                  name="message"
                  placeholder="您的需求 Your Message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-xs md:text-base text-white focus:outline-none focus:border-[#8c7851] transition-all placeholder:text-zinc-500"
                />
                
                <button 
                  type="submit" 
                  className="w-full py-3 md:py-4 bg-[#8c7851] text-white rounded-xl font-bold text-xs md:text-base uppercase tracking-widest hover:bg-[#a68d5f] border border-[#8c7851] hover:border-[#a68d5f] transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  發送諮詢 Send Inquiry
                </button>
                <p className="text-[10px] text-zinc-500 text-center">
                  * 點擊後將自動開啟您的電子信箱應用程式發送郵件
                </p>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <Sparkles className="text-[#8c7851]" size={32} />
                </div>
                <h3 className="text-xl font-serif italic mb-2 text-[#fdfbf7]">訊息已送出</h3>
                <p className="text-zinc-400 text-sm mb-6">感謝您的諮詢，我們將會盡快與您聯繫。</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-[#8c7851] transition-colors"
                >
                  再次發送 Send Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-10 md:py-16 border-t border-white/5 px-4 md:px-6 bg-[#121212]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
      <div className="text-[10px] md:text-sm text-zinc-500 text-center md:text-left">
        © 2026 棠哲攝影｜AI 視覺藝術與商業攝影 TONGZHE PHOTOGRAPHER AI VISUAL. <span className="block md:inline">版權所有 All rights reserved.</span>
      </div>
      <div className="flex gap-6 md:gap-8 text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500">
        <a href="#" className="hover:text-[#8c7851] transition-colors">隱私政策 Privacy</a>
        <a href="#" className="hover:text-[#8c7851] transition-colors">服務條款 Terms</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#8c7851] selection:text-white select-none bg-[#050505]">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-[#121212] relative z-10">
          <Showcase />
          <Services />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
